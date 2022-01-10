import { Link } from "react-router-dom";

export default function NavigationMenu(props) {
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
          <Link to={"#"} className='nav__link'>
            Home
          </Link>
          <Link to={"#"} className='nav__link'>
            Saved articles
          </Link>
        </div>
        <button onClick={props.onSigninClick} className='nav__btn-signin'>
          Sign in
        </button>
      </div>
    </div>
  );
}
