import React, { useState } from "react";

export default function NewsCard(props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <article className='news-card'>
      <div className='news-card__img-container'>
        <img className='news-card__img' src={props.card.img} alt='' />
        <button
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          className={props.isOwned ? "news-card__delete" : "news-card__add"}
        />
        <button
          className={
            isShow
              ? "news-card__signin news-card__signin_visible"
              : "news-card__signin"
          }
        >
          Sign in to save articles
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
