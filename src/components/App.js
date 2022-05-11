import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import NavigationMenu from "./NavigationMenu";
import Main from "./Main";
import Footer from "./Footer";
import NewsApi from "../utils/NewsApi";
import MainApi from "../utils/MainApi";
import SavedNews from "./SavedNews";
import SuccessPopup from "./SuccessPopup";
import CurrentUserContext from "../contexts/currentUser";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPopup from "./ErrorPopup";

export default function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isPreloaderShown, setIsPreloaderShown] = useState(false);
  const [isResultsShown, setIsResultsShown] = useState(false);
  const [isNotFoundShown, setIsNotFoundShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isResultsErrorShown, setIsResultsErrorShown] = useState(false);

  function closeAllPopups() {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsNavMenuOpen(false);
    setIsSuccessPopupOpen(false);
    setIsErrorPopupOpen(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken(jwt)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(`Error...: ${err}`);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const lastResults = localStorage.getItem("last-results");
    if (lastResults) {
      setCards(JSON.parse(lastResults));
      setIsResultsShown(true);
    }
  }, []);

  /* Makes request to the news API to get all articles related to the keyword. 
  Returns if no keyword was provided. */
  function handleSearchSubmit(keyword) {
    if (!keyword) return;
    setIsNotFoundShown(false);
    setIsPreloaderShown(true);
    setIsResultsShown(false);
    setCards([]);
    NewsApi.getCards(keyword)
      .then((resultCards) => {
        if (resultCards.length < 1) {
          setIsNotFoundShown(true);
          setIsResultsShown(false);
        } else {
          setCards(resultCards);
          setIsResultsShown(true);
          localStorage.setItem("last-results", JSON.stringify(resultCards));
        }
      })
      .catch(() => {
        setIsResultsErrorShown(true);
      })
      .finally(() => setIsPreloaderShown(false));
    setCurrentKeyword(keyword);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;
    MainApi._headers.authorization = `Bearer ${jwt}`;

    MainApi.getUserInfo()
      .then((userInfo) => setCurrentUser(userInfo))
      .catch((err) => console.log(`Error...: ${err}`));

    MainApi.getSavedCards().then((recievedCards) =>
      setSavedCards(recievedCards.reverse())
    );
  }, [isLoggedIn]);

  useEffect(() => {
    handleSearchSubmit(currentKeyword);
  }, [isLoggedIn]);

  function handleRegister(valuesObj) {
    MainApi.register(valuesObj)
      .then(() => {
        closeAllPopups();
        setIsSuccessPopupOpen(true);
      })
      .catch((err) => setIsErrorPopupOpen(true));
  }

  function handleLogin(valuesObj) {
    MainApi.authorize(valuesObj)
      .then(() => {
        setIsLoggedIn(true);
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch(() => {
        closeAllPopups();
        setIsErrorPopupOpen(true);
      });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.clear();
    setSavedCards([]);
    closeAllPopups();
  }

  function handleSaveArticle(keyword, title, text, date, source, link, image) {
    MainApi.saveArticle(keyword, title, text, date, source, link, image)
      .then((newCard) => setSavedCards([newCard, ...savedCards]))
      .catch((err) => console.log(err));
  }

  function handleDeleteArticle(cardToDeleteId) {
    MainApi.deleteArticle(cardToDeleteId);
    setSavedCards(
      savedCards.filter((article) => article._id !== cardToDeleteId)
    );
  }

  /* Checks if article has already been saved before 
  and returns the corresponding articles id */
  function checkOwned(cardDescription) {
    const matchingCard = savedCards.find(
      (card) => card.title === cardDescription
    );
    if (!matchingCard) return { isOwned: false };
    return { isOwned: true, storedId: matchingCard._id };
  }

  function openSignup() {
    closeAllPopups();
    setIsSignupOpen(true);
  }

  function openSignin() {
    closeAllPopups();
    setIsSigninOpen(true);
  }

  function openNavMenu() {
    closeAllPopups();
    setIsNavMenuOpen(true);
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Main
                  onSigninClick={openSignin}
                  onMenuClick={openNavMenu}
                  cards={cards}
                  onSearchClick={handleSearchSubmit}
                  isPreloaderShown={isPreloaderShown}
                  isResultsShown={isResultsShown}
                  isNotFoundShown={isNotFoundShown}
                  isLoggedIn={isLoggedIn}
                  onLogoutClick={handleLogout}
                  onSaveClick={handleSaveArticle}
                  currentKeyword={currentKeyword}
                  isOwned={checkOwned}
                  onDeleteClick={handleDeleteArticle}
                  onUnauthSaveClick={openSignup}
                  isResultsErrorShown={isResultsErrorShown}
                />
                <Signin
                  isOpen={isSigninOpen}
                  onCloseClick={closeAllPopups}
                  onRedirect={openSignup}
                  onLoginClick={handleLogin}
                />
                <Signup
                  isOpen={isSignupOpen}
                  onCloseClick={closeAllPopups}
                  onRedirect={openSignin}
                  onRegister={handleRegister}
                />
                <SuccessPopup
                  onCloseClick={closeAllPopups}
                  isOpen={isSuccessPopupOpen}
                  onRedirect={openSignin}
                />
                <ErrorPopup
                  onCloseClick={closeAllPopups}
                  isOpen={isErrorPopupOpen}
                  onRedirect={openSignin}
                />
              </>
            }
          />
          <Route
            path='/saved-news'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  onMenuClick={openNavMenu}
                  isLoggedIn={isLoggedIn}
                  onLogoutClick={handleLogout}
                  savedCards={savedCards}
                  onDeleteClick={handleDeleteArticle}
                  isOwned={checkOwned}
                />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <NavigationMenu
          isOpen={isNavMenuOpen}
          onCloseClick={closeAllPopups}
          onSigninClick={openSignin}
          onLogoutClick={handleLogout}
          isLoggedIn={isLoggedIn}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}
