import { SyntheticEvent } from "react";

interface MovieListItemProps {
  Genres: string[];
  onSelect: (genre: string) => void; // update here
}
function MovieSelectList(props: MovieListItemProps) {
  // update here to handle selection
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSelect(event.target.value);
  };
  return (
    <select onChange={handleSelection} name="" id="">
      {props.Genres.map((genre) => {
        return <option value={genre}>{genre}</option>;
      })}
      <option value="">No Filter</option>
    </select>
  );
}

export default MovieSelectList;
