import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import NavigationMenu from "./NavigationMenu";
import Main from "./Main";
import { Route, Routes, Navigate } from "react-router-dom";
import SavedNews from "./SavedNews";

export default function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSavedArticlesHidden, setIsSavedArticlesHidden] = useState(true);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

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

  function closeAllPopups() {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsNavMenuOpen(false);
  }

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Main
                onSigninClick={openSignin}
                onMenuClick={openNavMenu}
                isHidden={isSavedArticlesHidden}
              />
              <Signin
                isOpen={isSigninOpen}
                onCloseClick={closeAllPopups}
                onRedirect={openSignup}
              />
              <Signup
                isOpen={isSignupOpen}
                onCloseClick={closeAllPopups}
                onRedirect={openSignin}
              />
              <NavigationMenu
                isOpen={isNavMenuOpen}
                onCloseClick={closeAllPopups}
                onSigninClick={openSignin}
              />
            </>
          }
        />
        <Route path='/saved-news' element={<SavedNews />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}
