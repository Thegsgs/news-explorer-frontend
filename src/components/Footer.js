import { Link } from "react-router-dom";
import fbIco from "../images/fb.png";
import githubIco from "../images/github.png";

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__copyright'>
        © 2020 Supersite, Powered by News API
      </h2>
      <nav className='footer__links'>
        <Link to={"/"} className='footer__link'>
          Home
        </Link>
        <a
          className='footer__link'
          target='_blank'
          rel='noreferrer'
          href={"https://practicum.yandex.com/"}
        >
          Practicum by Yandex
        </a>
      </nav>
      <nav className='footer__btns'>
        <a
          href='https://github.com/Thegsgs'
          target='_blank'
          rel='noreferrer'
          className='footer__btn'
        >
          <img src={githubIco} alt='github' />
        </a>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noreferrer'
          className='footer__btn'
        >
          <img src={fbIco} alt='facebook' />
        </a>
      </nav>
    </footer>
  );
}
