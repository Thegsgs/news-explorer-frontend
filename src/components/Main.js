import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Results from "./Results";
import Search from "./Search";
import NewsCardList from "./NewsCardList";

export default function Main(props) {
  return (
    <>
      <Search>
        <Header
          btnText='Sign in'
          openSignin={props.onSigninClick}
          onMenuClick={props.onMenuClick}
          isHidden={props.isHidden}
        />
      </Search>
      <Results>
        <NewsCardList isOwned={false} postsToShow={3} />
      </Results>
      <About />
      <Footer />
    </>
  );
}
