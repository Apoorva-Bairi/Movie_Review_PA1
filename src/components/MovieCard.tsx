import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useAppSelector } from "../app/hooks";

export default function MovieCard({ movie }: any) {
  const nav = useNavigate();
  const userRating = useAppSelector(
    (s) => s.movies.ratings[movie.imdbID] || 0
  );

  const imdb = parseFloat(movie.imdbRating || "0");

  const avg =
    userRating > 0
      ? ((imdb / 2 + userRating) / 2).toFixed(1)
      : (imdb / 2).toFixed(1);

  return (
    <div
      onClick={() => nav(`/movie/${movie.imdbID}`)}
      className="bg-white dark:bg-gray-800 p-2 rounded shadow cursor-pointer"
    >
      <img src={movie.Poster} className="rounded" />

      <h2 className="mt-2 font-semibold">{movie.Title}</h2>

      <p className="text-sm text-gray-400">⭐ Avg: {avg}/5</p>

      <div onClick={(e) => e.stopPropagation()}>
        <StarRating movieId={movie.imdbID} />
      </div>
    </div>
  );
}