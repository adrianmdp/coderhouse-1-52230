export const getPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/person/popular?api_key=0bce2b3619ac231ad6ce364b6d8015ab"
  );

  const data = await response.json();

  return data.results;
};
