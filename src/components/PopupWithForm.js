export default function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? "popup popup_opened" : "popup"}>
      <div className='popup__container'>
        <button onClick={props.onCloseClick} className='popup__close-btn' />
        <h2 className='popup__title'>{props.titleText}</h2>
        <form className='popup__form' method='POST' name='signin-form'>
          {props.children}
          <button type='submit' className='popup__submit-btn'>
            {props.btnText}
          </button>
        </form>
        <p onClick={props.onRedirect} className='popup__redirect'>
          {props.redirectText}
        </p>
      </div>
    </div>
  );
}
