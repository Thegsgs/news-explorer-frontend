export default function results(props) {
  return (
    <div className='results'>
      <h2 className='results__title'>Search results</h2>
      <div className='results__container'>{props.children}</div>
      <button className='results__btn'>Show more</button>
    </div>
  );
}
