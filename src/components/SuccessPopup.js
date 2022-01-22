import PopupWithForm from "./PopupWithForm";

export default function SuccessPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      titleText='Registration successfully completed!'
      redirectText='Sign in'
      onCloseClick={props.onCloseClick}
    >
      <p
        onClick={props.onRedirect}
        style={{ margin: "0 auto 51px 36px" }}
        className='popup__redirect'
      >
        Sign in
      </p>
    </PopupWithForm>
  );
}
