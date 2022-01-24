import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../utils/useForm";

export default function Signup(props) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  useEffect(() => {
    resetForm();
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values);
  }

  function handleClose() {
    props.onCloseClick();
  }

  return (
    <PopupWithForm
      titleText='Sign up'
      isOpen={props.isOpen}
      onCloseClick={handleClose}
    >
      <form
        onSubmit={handleSubmit}
        className='popup__form'
        method='POST'
        name='signup-form'
      >
        <div className='popup__input-container'>
          <h3 className='popup__subtitle'>Email</h3>
          <input
            className='popup__input'
            id='email-input-signup'
            type='email'
            name='email'
            placeholder='Enter email'
            minLength='2'
            maxLength='40'
            required
            value={values.email || ""}
            onChange={handleChange}
          />
          <p
            className={
              errors.email
                ? "popup__error popup__error_visible"
                : "popup__error"
            }
          >
            {errors.email}
          </p>
        </div>
        <div className='popup__input-container'>
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
            value={values.password || ""}
            onChange={handleChange}
          />
          <p
            className={
              errors.password
                ? "popup__error popup__error_visible"
                : "popup__error"
            }
          >
            {errors.password}
          </p>
        </div>
        <div className='popup__input-container'>
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
            value={values.username || ""}
            onChange={handleChange}
          />
          <p
            className={
              errors.username
                ? "popup__error popup__error_visible"
                : "popup__error"
            }
          >
            {errors.username}
          </p>
        </div>

        <button
          type='submit'
          className={
            isValid
              ? "popup__submit-btn popup__submit-btn_active"
              : "popup__submit-btn"
          }
        >
          Sign up
        </button>
      </form>
      <p onClick={props.onRedirect} className='popup__redirect'>
        or Sign in
      </p>
    </PopupWithForm>
  );
}
