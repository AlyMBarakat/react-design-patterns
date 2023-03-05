import { DARK } from "../../App";
import { withLoading } from "../hoc-render-props/hoc";
const { useState, useEffect } = require("react");
const { MOVIES } = require("./mocked-constants");

// Smallest Presentational component
// No logic
// Only cares about presenting UI
const Movie = ({ id, title, overview }) => {
  return (
    <>
      <li>{title}</li>
      <div
        style={{
          color: DARK,
          width: "500px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "20px",
        }}
      >
        {overview}
      </div>
    </>
  );
};

// Another Presentational component
// Only cares about UI presentational logic
const MovieList = ({ listOfMovies, numberOfMoviesToList }) => {
  if (listOfMovies?.length > 0) {
    return (
      <ul>
        {listOfMovies.slice(0, numberOfMoviesToList).map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </ul>
    );
  }
};

// Container component
// No UI
// Data fetching and processing logic
const FeaturedMovies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = () => {
    return new Promise((res) => {
      setTimeout(() => res(MOVIES), 2000);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMovies()
      .then((data) => {
        const { results } = data;
        setMovies(results);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <MovieListWithLoading
      listOfMovies={movies}
      numberOfMoviesToList={5}
      isLoading={isLoading}
    />
  );
};

// Using HoC design pattern to handle loading
const MovieListWithLoading = withLoading(MovieList);

export { FeaturedMovies };
