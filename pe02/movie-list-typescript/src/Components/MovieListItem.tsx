interface MovieListItemProps {
  Id: number;
  Title: string;
  Genre: string;
  Year: number;
}
function MovieListItem(props: MovieListItemProps) {
  return (
    <div>
      <h3>{props.Title}</h3>
      <p>{props.Genre}</p>
      <p>{props.Year}</p>
    </div>
  );
}

export default MovieListItem;
