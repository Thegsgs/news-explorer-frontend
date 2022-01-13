import PopupWithForm from "./PopupWithForm";

export default function Signin(props) {
  return (
    <PopupWithForm
      titleText='Sign in'
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
    >
      <form className='popup__form' method='POST' name='signin-form'>
        <h3 className='popup__subtitle'>Email</h3>
        <input
          className='popup__input'
          id='email-input-signin'
          type='text'
          name='email'
          placeholder='Enter email'
          minLength='2'
          maxLength='40'
          required
        />
        <h3 className='popup__subtitle'>Password</h3>
        <input
          className='popup__input'
          id='password-input-signin'
          type='password'
          name='password'
          placeholder='Enter password'
          minLength='2'
          maxLength='40'
          required
        />
        <button type='submit' className='popup__submit-btn'>
          Sign in
        </button>
        <p onClick={props.onRedirect} className='popup__redirect'>
          or Sign up
        </p>
      </form>
    </PopupWithForm>
  );
}
