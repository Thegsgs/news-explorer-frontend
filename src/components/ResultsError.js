import NotFound from "./NotFound";

export default function ResultsError(props) {
  return (
    <NotFound
      isShown={props.isShown}
      titleText='Error!'
      text='Sorry, looks like an error occured while searching.'
    />
  );
}
