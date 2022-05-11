import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewsCardList from "./NewsCardList";
import NotFound from "./NotFound";
import SavedCards from "./SavedCards";
import SavedNewsHeader from "./SavedNewsHeader";

export default function SavedNews(props) {
  const [isNotFoundShown, setIsNotFoundShown] = useState(props.savedCards < 1);

  useEffect(() => {
    setIsNotFoundShown(props.savedCards < 1);
  }, [props.savedCards]);

  return (
    <>
      <Header
        isDark={true}
        btnText='Elise'
        isSelected='news'
        onMenuClick={props.onMenuClick}
        isLoggedIn={props.isLoggedIn}
        onLogoutClick={props.onLogoutClick}
      />
      <SavedNewsHeader cards={props.savedCards} />
      <NotFound
        isShown={isNotFoundShown}
        titleText='Nothing found'
        text="Sorry, looks like you haven't saved any articles."
      />
      <SavedCards isShown={!isNotFoundShown}>
        <NewsCardList
          isOwned={props.isOwned}
          postsToShow={props.savedCards.length}
          popupText='Remove from saved'
          isKeywordVisible={true}
          cards={props.savedCards}
          onDeleteClick={props.onDeleteClick}
          isLoggedIn={props.isLoggedIn}
        />
      </SavedCards>
    </>
  );
}
