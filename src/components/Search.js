export default function Search(props) {
  return (
    <main className='search'>
      {props.children}
      <h1 className='search__title'>What's going on in the world?</h1>
      <h2 className='search__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <div className='search__container'>
        <input className='search__input' placeholder='Enter topic'></input>
        <button className='search__btn'>Search</button>
      </div>
    </main>
  );
}
