import { useEffect, useState } from "react";
import About from "./About";
import Header from "./Header";
import Results from "./Results";
import Search from "./Search";
import NewsCardList from "./NewsCardList";
import NotFound from "./NotFound";
import Preloader from "./Preloader";
import ResultsError from "./ResultsError";

export default function Main(props) {
  const [postsToShow, setPostsToShow] = useState(3);
  const [isShowMoreBtnHidden, setIsShowMoreBtnHidden] = useState(false);

  useEffect(() => {
    if (props.cards.length < 4) setIsShowMoreBtnHidden(true);
    else setIsShowMoreBtnHidden(false);
    setPostsToShow(3);
  }, [props.cards]);

  function showMorePosts() {
    setPostsToShow(postsToShow + 3);
    if (postsToShow + 3 >= props.cards.length) {
      setIsShowMoreBtnHidden(true);
    }
  }

  return (
    <>
      <Search onSearchClick={props.onSearchClick}>
        <Header
          btnText='Sign in'
          openSignin={props.onSigninClick}
          onMenuClick={props.onMenuClick}
          isSelected='home'
          isLoggedIn={props.isLoggedIn}
          isDark={false}
          onLogoutClick={props.onLogoutClick}
        />
      </Search>
      <Preloader isShown={props.isPreloaderShown} />
      <ResultsError isShown={props.isResultsErrorShown} />
      <NotFound
        isShown={props.isNotFoundShown}
        titleText='Nothing found'
        text='Sorry, but nothing matched your search terms.'
      />
      <Results
        isShown={props.isResultsShown}
        onShowMoreClick={showMorePosts}
        isShowMoreBtnHidden={isShowMoreBtnHidden}
      >
        <NewsCardList
          cards={props.cards}
          isOwned={props.isOwned}
          postsToShow={postsToShow}
          popupText='Sign in to save articles'
          isKeywordVisible={false}
          isLoggedIn={props.isLoggedIn}
          onSaveClick={props.onSaveClick}
          currentKeyword={props.currentKeyword}
          onDeleteClick={props.onDeleteClick}
          btnType={"label"}
          onUnauthSaveClick={props.onUnauthSaveClick}
        />
      </Results>
      <About />
    </>
  );
}
