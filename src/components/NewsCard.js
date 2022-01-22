import React, { useState } from "react";

export default function NewsCard(props) {
  const [isShow, setIsShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  function switchSelected() {
    if (isSelected) {
      setIsSelected(false);
    } else setIsSelected(true);
  }

  return (
    <article className='news-card'>
      <div className='news-card__img-container'>
        <img
          className='news-card__img'
          src={props.card.img}
          alt={props.card.title}
        />
        <button
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          onClick={switchSelected}
          className={`${
            props.isOwned ? "news-card__delete" : "news-card__add"
          } ${isSelected ? "news-card__add_selected" : ""}`}
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
      <div className='news-card__text-container'>
        <h3 className='news-card__date'>{props.card.date}</h3>
        <h2 className='news-card__title'>{props.card.title}</h2>
        <p className='news-card__text'>{props.card.text}</p>
        <h3 className='news-card__source'>{props.card.src.toUpperCase()}</h3>
      </div>
    </article>
  );
}
