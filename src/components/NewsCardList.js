import NewsCard from "./NewsCard";

export default function NewsCardList(props) {
  return (
    <div className='card-list'>
      {props.cards.slice(0, props.postsToShow).map((card) => (
        <NewsCard
          key={card._id || props.cards.indexOf(card)}
          card={card}
          isOwned={props.isOwned}
          keyword={card.keyword}
          popupText={props.popupText}
          isKeywordVisible={props.isKeywordVisible}
          isLoggedIn={props.isLoggedIn}
          onSaveClick={props.onSaveClick}
          currentKeyword={props.currentKeyword}
          onDeleteClick={props.onDeleteClick}
          btnType={props.btnType}
          onUnauthSaveClick={props.onUnauthSaveClick}
        />
      ))}
    </div>
  );
}
