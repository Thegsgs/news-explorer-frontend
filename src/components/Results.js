export default function results(props) {
  return (
    <div className={props.isShown ? "results results_visible" : "results"}>
      <div className='results__container'>
        <h2 className='results__title'>Search results</h2>
        {props.children}
      </div>
      <button
        onClick={props.onShowMoreClick}
        className={
          props.isShowMoreBtnHidden
            ? "results__btn results__btn_hidden"
            : "results__btn"
        }
      >
        Show more
      </button>
    </div>
  );
}
