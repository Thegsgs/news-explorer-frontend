import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function Search(props) {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setKeyword("");
  }, []);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function searchNews(e) {
    e.preventDefault();
    if (keyword !== "") {
      props.onSearchClick(keyword);
    }
  }

  return (
    <main className='search'>
      {props.children}
      <h2 className='search__title'>What's going on in the world?</h2>
      <h2 className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <form
        onSubmit={searchNews}
        className='search__container'
        name='search-form'
        method='POST'
      >
        <input
          value={keyword}
          onChange={handleKeywordChange}
          className='search__input'
          placeholder='Enter topic'
          type='string'
          required
        />
        <button type='submit' className='search__btn'>
          Search
        </button>
      </form>
    </main>
  );
}
