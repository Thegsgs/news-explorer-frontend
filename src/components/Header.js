import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className={props.isDark ? "header header_dark" : "header"}>
      <h1 className='header__title'>NewsExplorer</h1>
      <nav className='header__links'>
        <Link
          to={"/"}
          className={`${
            props.isDark
              ? "header__link header__link_color_black"
              : "header__link header__link_color_white"
          } ${props.isSelected === "home" ? "header__link_selected" : ""}`}
        >
          Home
        </Link>
        <Link
          to={"/saved-news"}
          className={`${
            props.isDark
              ? "header__link header__link_color_black"
              : "header__link header__link_color_white"
          } ${props.isSelected === "news" ? "header__link_selected" : ""}`}
        >
          Saved articles
        </Link>
        <button
          onClick={props.openSignin}
          className={
            props.isDark ? "header__btn header__btn_dark" : "header__btn"
          }
        >
          {props.btnText}
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
