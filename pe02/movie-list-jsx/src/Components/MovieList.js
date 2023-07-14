import MovieListItem from "./MovieListItem";
const movieData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "drama",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "drama",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: 1974,
    genre: "drama",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "action",
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1957,
    genre: "drama",
  },
  {
    id: 6,
    title: "Schindler's List",
    year: 1993,
    genre: "drama",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    year: 1994,
    genre: "drama",
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: "fantasy",
  },
  {
    id: 9,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    genre: "western",
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    genre: "drama",
  },
  {
    id: 11,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genre: "fantasy",
  },
  {
    id: 12,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    genre: "action",
  },
  {
    id: 13,
    title: "Forrest Gump",
    year: 1994,
    genre: "drama",
  },
];
//get the distinct genres
//first we use the map function to get only the genres from the list
//then we use filter to remove duplicates
const distinctGenres = movieData
  .map((movie) => movie.genre)
  .filter((genre, index, array) => array.indexOf(genre) === index);

function MovieList() {
  return (
    <div>
      {movieData.map((movie) => {
        return (
          <MovieListItem
            id={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
          ></MovieListItem>
        );
      })}
    </div>
  );
}

export default MovieList;
