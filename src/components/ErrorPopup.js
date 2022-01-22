import PopupWithForm from "./PopupWithForm";

export default function ErrorPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      titleText='Error! Something went wrong, please try again.'
      redirectText='Sign in'
      onCloseClick={props.onCloseClick}
    >
      <p
        onClick={props.onRedirect}
        style={{ margin: "0 auto 51px 36px" }}
        className='popup__redirect'
      >
        Try again
      </p>
    </PopupWithForm>
  );
}
