export default function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? "popup popup_opened" : "popup"}>
      <div className='popup__container'>
        <button onClick={props.onCloseClick} className='popup__close-btn' />
        <h2 className='popup__title'>{props.titleText}</h2>
        {props.children}
      </div>
    </div>
  );
}
