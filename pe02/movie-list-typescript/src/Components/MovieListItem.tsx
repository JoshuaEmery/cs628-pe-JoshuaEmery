interface MovieListItemProps {
  Id: number;
  Title: string;
  Genre: string;
  Year: number;
}
function MovieListItem(props: MovieListItemProps) {
  return (
    <div className="col-lg p-3">
      <div className="card h-100 m-1 p-1">
        {/* <img
          className="card-img-top"
          src="https://placehold.co/50x50"
          alt="placeholder"
        /> */}
        <h3>{props.Title}</h3>

        <p>{props.Genre}</p>
        <p>{props.Year}</p>
      </div>
    </div>
  );
}

export default MovieListItem;
