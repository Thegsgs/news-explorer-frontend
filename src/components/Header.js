import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUser";

export default function Header(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className={props.isDark ? "header header_dark" : "header"}>
      <h1 className='header__title'>NewsExplorer</h1>
      <nav className='header__links'>
        <Link
          to={"/"}
          className={`header__link ${
            props.isDark
              ? "header__link_color_black"
              : "header__link_color_white"
          } ${props.isSelected === "home" ? "header__link_selected" : ""}`}
        >
          Home
        </Link>
        <Link
          to={"/saved-news"}
          className={`header__link header__link_dim ${
            props.isDark
              ? "header__link_color_black"
              : "header__link_color_white"
          } ${props.isSelected === "news" ? "header__link_selected" : ""} ${
            props.isLoggedIn ? "" : "header__link_hidden"
          }`}
        >
          Saved articles
        </Link>
        <button
          onClick={props.isLoggedIn ? props.onLogoutClick : props.openSignin}
          className={`header__btn ${props.isDark ? "header__btn_dark" : ""} ${
            props.isLoggedIn ? "header__btn_logout" : ""
          }
          `}
        >
          {props.isLoggedIn ? currentUser.username : "Sign in"}
        </button>
      </nav>
      <button
        onClick={props.onMenuClick}
        className={
          props.isDark
            ? "header__menu-btn header__menu-btn_color_black"
            : "header__menu-btn"
        }
      ></button>
    </header>
  );
}
