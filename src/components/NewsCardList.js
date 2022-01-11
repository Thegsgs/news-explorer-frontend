import initialCards from "../initialCards";
import NewsCard from "./NewsCard";

export default function NewsCardList(props) {
  return (
    <div className='card-list'>
      {initialCards.slice(0, props.postsToShow).map((card) => (
        <NewsCard
          key={initialCards.indexOf(card)}
          card={card}
          isOwned={props.isOwned}
        />
      ))}
    </div>
  );
}
