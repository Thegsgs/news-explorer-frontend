export default function Preloader(props) {
  return (
    <div
      className={props.isShown ? "preloader preloader_visible" : "preloader"}
    >
      <div className='preloader__animation' />
      <p className='preloader__text'>Searching for news...</p>
    </div>
  );
}
