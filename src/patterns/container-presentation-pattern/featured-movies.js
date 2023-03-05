import { DARK } from "../../App";

const { useState, useEffect } = require("react");
const { MOVIES } = require("./mocked-constants");

export const FeaturedMovies = () => {
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

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (movies) {
    return (
      <ul>
        {movies.slice(0, 4).map((movie) => (
          <>
            <li key={movie?.id}>{movie?.title}</li>
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
              {movie.overview}
            </div>
          </>
        ))}
      </ul>
    );
  }

  return null;
};
