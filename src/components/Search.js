export default function Search(props) {
  return (
    <main className='search'>
      {props.children}
      <h2 className='search__title'>What's going on in the world?</h2>
      <h2 className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <form className='search__container' name='search-form'>
        <input className='search__input' placeholder='Enter topic'></input>
        <button className='search__btn'>Search</button>
      </form>
    </main>
  );
}
