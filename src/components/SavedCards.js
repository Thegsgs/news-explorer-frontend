export default function SavedCards(props) {
  return (
    <div
      className={
        props.isShown ? "saved-cards" : "saved-cards saved-cards_hidden"
      }
    >
      {props.children}
    </div>
  );
}
