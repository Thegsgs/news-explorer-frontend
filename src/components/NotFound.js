import notFoundIco from "../images/not-found.png";

export default function NotFound(props) {
  return (
    <div
      className={props.isShown ? "not-found not-found_visible" : "not-found"}
    >
      <img className='not-found__img' src={notFoundIco} alt='not found' />
      <h2 className='not-found__title'>{props.titleText}</h2>
      <h3 className='not-found__subtitle'>{props.text}</h3>
    </div>
  );
}
