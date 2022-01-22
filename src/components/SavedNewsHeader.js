import React, { useContext } from "react";
import CurrentUserContext from "../contexts/currentUser";

export default function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  // Returns array with all article keywords
  function totalKeywords() {
    const keywords = [];
    props.cards.forEach((card) => keywords.push(card.keyword));
    return keywords;
  }

  // Find how many unique keywords there are from all saved articles
  function uniqueKeywordsCount() {
    const uniqueKeywords = [];
    props.cards.forEach((card) => {
      if (!uniqueKeywords.includes(card.keyword))
        uniqueKeywords.push(card.keyword);
    });
    return uniqueKeywords;
  }

  // Finds key with highest value in a hashmap
  function findHighest(hashmap) {
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b
    );
  }

  // Finds up to 3 most frequent keywords depending on how many different keywords there are in hashmap
  function getMostFrequent(arr) {
    const hashmap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    const firstHighest = findHighest(hashmap);
    if (Object.keys(hashmap).length < 2) return firstHighest;
    delete hashmap[firstHighest];
    const secondHigest = findHighest(hashmap);
    if (Object.keys(hashmap).length < 2) return [firstHighest, secondHigest];
    delete hashmap[secondHigest];
    const thirdHighest = findHighest(hashmap);
    return [firstHighest, secondHigest, thirdHighest];
  }

  // Displays a different message depending on the amount of different unique keywords
  function keywordString(arrLength) {
    if (!arrLength) return "";
    if (arrLength === 1) return getMostFrequent(totalKeywords());
    if (arrLength === 2)
      return ` ${getMostFrequent(totalKeywords())[0]} and ${
        getMostFrequent(totalKeywords())[1]
      }`;
    if (arrLength === 3)
      return ` ${getMostFrequent(totalKeywords())[0]}, ${
        getMostFrequent(totalKeywords())[1]
      } and ${getMostFrequent(totalKeywords())[2]}`;

    return ` ${getMostFrequent(totalKeywords())[0]}, ${
      getMostFrequent(totalKeywords())[1]
    } and ${arrLength - 2} others`;
  }

  return (
    <div className='saved'>
      <h3 className='saved__subtitle'>Saved articles</h3>
      <h2 className='saved__title'>{`${currentUser.username}, you have ${
        props.cards.length
      } ${props.cards.length === 1 ? "saved article" : "saved articles"}`}</h2>
      <h3 className='saved__keywords'>
        {uniqueKeywordsCount().length > 0 ? "By keywords:" : ""}
        <b>{` ${keywordString(uniqueKeywordsCount().length)}`}</b>
      </h3>
    </div>
  );
}
