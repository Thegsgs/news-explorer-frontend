import Footer from "./Footer";
import Header from "./Header";
import NewsCardList from "./NewsCardList";
import SavedCards from "./SavedCards";
import SavedNewsHeader from "./SavedNewsHeader";

export default function SavedNews() {
  return (
    <>
      <Header isDark={true} btnText='Elise' />
      <SavedNewsHeader />
      <SavedCards>
        <NewsCardList isOwned={true} postsToShow={5} />
      </SavedCards>

      <Footer />
    </>
  );
}
