import notFoundIco from "../images/not-found.png";

export default function NotFound() {
  return (
    <div className='not-found'>
      <img className='not-found__img' src={notFoundIco} alt='not found' />
      <h2 className='not-found__title'>Nothing found</h2>
      <h3 className='not-found__subtitle'>
        Sorry, but nothing matched your search terms.
      </h3>
    </div>
  );
}
