import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className={props.isDark ? "header header_dark" : "header"}>
      <h1 className='header__title'>NewsExplorer</h1>
      <div className='header__links'>
        <Link
          to={"/"}
          className={
            props.isDark ? "header__link header__link_dark" : "header__link"
          }
        >
          Home
        </Link>
        <Link
          to={"/saved-news"}
          className={
            props.isDark ? "header__link header__link_dark" : "header__link"
          }
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
      </div>
      <button onClick={props.onMenuClick} className='header__menu-btn'></button>
    </header>
  );
}
