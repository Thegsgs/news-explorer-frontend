import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Results from "./Results";
import Search from "./Search";
import NewsCardList from "./NewsCardList";
import NotFound from "./NotFound";
import Preloader from "./Preloader";

export default function Main(props) {
  return (
    <>
      <Search>
        <Header
          btnText='Sign in'
          openSignin={props.onSigninClick}
          onMenuClick={props.onMenuClick}
          isSelected='home'
        />
      </Search>
      <Results>
        <NewsCardList
          isOwned={false}
          postsToShow={3}
          popupText='Sign in to save articles'
          isKeywordVisible={false}
        />
      </Results>
      <About />
      <Footer />
      <NotFound />
      <Preloader />
    </>
  );
}
