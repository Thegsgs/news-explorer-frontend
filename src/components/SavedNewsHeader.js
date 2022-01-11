import initialCards from "../initialCards";

export default function SavedNewsHeader() {
  const keywords = [];
  function keywordCount() {
    initialCards.forEach((card) => {
      if (!keywords.includes(card.keyword)) keywords.push(card.keyword);
    });
    return keywords.length;
  }
  keywordCount();

  return (
    <div className='saved'>
      <h3 className='saved__subtitle'>Saved articles</h3>
      <h2 className='saved__title'>{`Elise, you have ${initialCards.length} saved articles`}</h2>
      <h3 className='saved__keywords'>
        By keywords:{" "}
        <b>{`${keywords[0]}, ${keywords[1]}, and ${
          keywords.length - 2
        } other`}</b>
      </h3>
    </div>
  );
}
