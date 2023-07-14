function MovieListItem(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <p>{props.genre}</p>
    </div>
  );
}

export default MovieListItem;
