import { useState } from "react";
import MovieListItem from "./MovieListItem";
import MovieSelectList from "./MovieSelectList";
const MovieData = [
  {
    Id: 1,
    Title: "The Shawshank Redemption",
    Genre: "Drama",
    Year: 1994,
  },
  {
    Id: 2,
    Title: "The Godfather",
    Genre: "Crime",
    Year: 1972,
  },
  {
    Id: 3,
    Title: "The Godfather: Part II",
    Genre: "Crime",
    Year: 1974,
  },
  {
    Id: 4,
    Title: "The Dark Knight",
    Genre: "Action",
    Year: 2008,
  },
];
//convert the list of movies to a list of strings
const genres = MovieData.map((movie) => movie.Genre);
//filter out the duplicate genres
const distinctGenres = genres.filter(
  (genre, index) => genres.indexOf(genre) === index
); // Filter out duplicates
function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const selectClickHandler = (genre: string) => {
    console.log(genre);
    setSelectedGenre(genre);
  };
  // Filter movies based on the selected genre
  const filteredMovies = selectedGenre
    ? MovieData.filter((movie) => movie.Genre === selectedGenre)
    : MovieData;
  return (
    <>
      <h1>Movie List</h1>
      <MovieSelectList
        Genres={distinctGenres}
        onSelect={selectClickHandler}
      ></MovieSelectList>

      <div className="row">
        {filteredMovies.map((movie) => {
          return (
            <MovieListItem
              key={movie.Id}
              Year={movie.Year}
              Id={movie.Id}
              Genre={movie.Genre}
              Title={movie.Title}
            ></MovieListItem>
          );
        })}
      </div>
    </>
  );
}

export default MovieList;
