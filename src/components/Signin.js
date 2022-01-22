import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../utils/useForm";

export default function Signin(props) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  useEffect(() => {
    resetForm();
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onLoginClick(values);
  }

  function handleClose() {
    props.onCloseClick();
  }

  return (
    <PopupWithForm
      titleText='Sign in'
      isOpen={props.isOpen}
      onCloseClick={handleClose}
    >
      <form
        onSubmit={handleSubmit}
        className='popup__form'
        method='POST'
        name='signin-form'
      >
        <div className='popup__input-container'>
          <h3 className='popup__subtitle'>Email</h3>
          <input
            className='popup__input'
            id='email-input-signin'
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
            id='password-input-signin'
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

        <button
          type='submit'
          className={
            isValid
              ? "popup__submit-btn popup__submit-btn_active"
              : "popup__submit-btn"
          }
        >
          Sign in
        </button>
        <p onClick={props.onRedirect} className='popup__redirect'>
          or Sign up
        </p>
      </form>
    </PopupWithForm>
  );
}
