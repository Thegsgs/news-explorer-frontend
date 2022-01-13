export default function results(props) {
  return (
    <div className='results'>
      <div className='results__container'>
        <h2 className='results__title'>Search results</h2>
        {props.children}
      </div>
      <button className='results__btn'>Show more</button>
    </div>
  );
}
