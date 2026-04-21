const API = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query: string) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API}&s=${query}`
  );
  return res.json();
};

export const getMovieDetails = async (id: string) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API}&i=${id}`
  );
  return res.json();
};