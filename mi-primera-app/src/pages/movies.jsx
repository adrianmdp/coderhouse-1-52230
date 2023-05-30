import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Movies</h1>
      <table>
        {movies.map((movie) => (
          <tr>...</tr>
        ))}
      </table>
    </>
  );
};

export { Movies };
