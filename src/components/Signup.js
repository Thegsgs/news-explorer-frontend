import PopupWithForm from "./PopupWithForm";

export default function Signup(props) {
  return (
    <PopupWithForm
      titleText='Sign up'
      btnText='Sign up'
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      redirectText='or Sign in'
      onRedirect={props.onRedirect}
    >
      <h3 className='popup__subtitle'>Email</h3>
      <input
        className='popup__input'
        id='email-input'
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
        id='password-input'
        type='password'
        name='password'
        placeholder='Enter password'
        minLength='2'
        maxLength='40'
        required
      />
      <h3 className='popup__subtitle'>Username</h3>
      <input
        className='popup__input'
        id='username-input'
        type='text'
        name='username'
        placeholder='Enter your username'
        minLength='2'
        maxLength='40'
        required
      />
    </PopupWithForm>
  );
}
