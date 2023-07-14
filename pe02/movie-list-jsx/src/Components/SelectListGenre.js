function SelectListGenre(props) {
  const changeHandler = (event) => {
    props.genreChangeHandler(event.target.value);
  };
  return (
    <div>
      <select onChange={changeHandler} name="" id="">
        <option key="" value="">
          No Filter
        </option>
        {props.genres.map((genre) => {
          return (
            <option key={genre} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectListGenre;
