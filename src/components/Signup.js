import PopupWithForm from "./PopupWithForm";

export default function Signup(props) {
  return (
    <PopupWithForm
      titleText='Sign up'
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
    >
      <form className='popup__form' method='POST' name='signup-form'>
        <h3 className='popup__subtitle'>Email</h3>
        <input
          className='popup__input'
          id='email-input-signup'
          type='text'
          name='email'
          placeholder='Enter email'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='popup__error popup__error_type_email-input-signup' />
        <h3 className='popup__subtitle'>Password</h3>
        <input
          className='popup__input'
          id='password-input-signup'
          type='password'
          name='password'
          placeholder='Enter password'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='popup__error popup__error_type_password-input-signup' />
        <h3 className='popup__subtitle'>Username</h3>
        <input
          className='popup__input'
          id='username-input-signup'
          type='text'
          name='username'
          placeholder='Enter your username'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='popup__error popup__error_type_username-input-signup' />
        <button type='submit' className='popup__submit-btn'>
          Sign up
        </button>
      </form>
      <p onClick={props.onRedirect} className='popup__redirect'>
        or Sign in
      </p>
    </PopupWithForm>
  );
}
