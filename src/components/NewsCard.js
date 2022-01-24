import React, { useState } from "react";
import noImgPath from "../images/no-image.png";

export default function NewsCard(props) {
  const [isShow, setIsShow] = useState(false);

  function handlePopupShow() {
    if (props.isLoggedIn && props.btnType === "label") return;
    setIsShow(true);
  }

  function handleArticleSave() {
    if (!props.isLoggedIn) return;
    props.onSaveClick(
      props.currentKeyword,
      props.card.title,
      props.card.description,
      props.card.publishedAt,
      props.card.source.name,
      props.card.url,
      props.card.urlToImage
    );
  }

  /* Sends the cards id if deleting card from storage. 
  If deleting card from main finds matching card in storage and sends its id instead. */
  function handleArticleDelete() {
    if (!props.isLoggedIn) return;
    props.onDeleteClick(
      props.card._id || props.isOwned(props.card.title).storedId
    );
  }

  function convertMonth(monthNum) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthNum - 1];
  }

  // Fixes ISO timestamp to design provided format
  function fixedDateFormat(date) {
    const year = date.slice(0, 4);
    const month = convertMonth(date.slice(5, 7));
    const day = date.slice(8, 10);
    return `${month} ${day}, ${year}`;
  }

  function handleIsOwned() {
    return props.isOwned(props.card.title).isOwned;
  }

  function determineBtnImg() {
    if (!handleIsOwned()) return "news-card__add";
    if (handleIsOwned() && props.btnType === "label")
      return "news-card__add news-card__add_selected";
    return "news-card__delete";
  }

  function determineBtnPressFunc() {
    if (handleIsOwned()) handleArticleDelete();
    else handleArticleSave();
  }

  return (
    <article className='news-card'>
      <div className='news-card__img-container'>
        <a
          className='news-card__link'
          href={props.card.url ? props.card.url : props.card.link}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='news-card__img'
            src={
              props.card.urlToImage
                ? props.card.urlToImage
                : props.card.image || noImgPath
            }
            alt={props.card.title}
          />
        </a>
        <button
          onMouseEnter={handlePopupShow}
          onMouseLeave={() => setIsShow(false)}
          onClick={
            props.isLoggedIn ? determineBtnPressFunc : props.onUnauthSaveClick
          }
          className={`${determineBtnImg()} ${
            handleIsOwned() ? "news-card__add_selected" : ""
          }`}
        />
        <div
          className={
            props.isKeywordVisible
              ? "news-card__keyword news-card__keyword_visible"
              : "news-card__keyword"
          }
        >
          {props.card.keyword}
        </div>
        <button
          className={
            isShow
              ? "news-card__popup news-card__popup_visible"
              : "news-card__popup"
          }
        >
          {props.popupText}
        </button>
      </div>
      <a
        className='news-card__link'
        href={props.card.url ? props.card.url : props.card.link}
        target='_blank'
        rel='noreferrer'
      >
        <div className='news-card__text-container'>
          <h3 className='news-card__date'>
            {fixedDateFormat(
              props.card.publishedAt ? props.card.publishedAt : props.card.date
            )}
          </h3>
          <h2 className='news-card__title'>{props.card.title}</h2>
          <p className='news-card__text'>
            {props.card.description ? props.card.description : props.card.text}
          </p>
          <h3 className='news-card__source'>
            {props.card.source.name
              ? props.card.source.name.toUpperCase()
              : props.card.source.toUpperCase()}
          </h3>
        </div>
      </a>
    </article>
  );
}
