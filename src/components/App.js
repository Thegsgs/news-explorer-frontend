import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import NavigationMenu from "./NavigationMenu";
import Main from "./Main";

import SavedNews from "./SavedNews";
import SuccessPopup from "./SuccessPopup";

export default function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsNavMenuOpen(false);
    setIsSuccessPopupOpen(false);
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
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Main onSigninClick={openSignin} onMenuClick={openNavMenu} />
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
              <SuccessPopup
                onCloseClick={closeAllPopups}
                isOpen={isSuccessPopupOpen}
                onRedirect={openSignin}
              />
            </>
          }
        />
        <Route
          path='/saved-news'
          element={
            <>
              <SavedNews onMenuClick={openNavMenu} />
              <NavigationMenu
                isOpen={isNavMenuOpen}
                onCloseClick={closeAllPopups}
                onSigninClick={openSignin}
              />
            </>
          }
        />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}
