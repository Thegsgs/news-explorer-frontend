import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUser";

export default function NavigationMenu(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className={props.isOpen ? "nav nav_opened" : "nav"}>
      <div className='nav__container'>
        <div className='nav__header'>
          <h2 className='nav__title'>NewsExplorer</h2>
          <button
            onClick={props.onCloseClick}
            className='nav__btn-close'
          ></button>
        </div>
        <div className='nav__links'>
          <Link to={"/"} className='nav__link'>
            Home
          </Link>
          <Link
            to={"/saved-news"}
            className={
              props.isLoggedIn ? "nav__link" : "nav__link nav__link_hidden"
            }
          >
            Saved articles
          </Link>
        </div>
        <button
          onClick={props.isLoggedIn ? props.onLogoutClick : props.onSigninClick}
          className={props.isLoggedIn ? "nav__btn nav__btn_logout" : "nav__btn"}
        >
          {props.isLoggedIn ? currentUser.username : "Sign in"}
        </button>
      </div>
    </div>
  );
}
