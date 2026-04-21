import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import StarRating from "../components/StarRating";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = useAppSelector((s) =>
    s.movies.movies.find((m) => m.imdbID === id)
  );

  const userRating = useAppSelector(
    (s) => s.movies.ratings[id || ""] || 0
  );

  if (!movie) return <p className="p-6">Movie not found</p>;

  const imdb = parseFloat(movie.imdbRating || "0");

  const avg =
    userRating > 0
      ? ((imdb / 2 + userRating) / 2).toFixed(1)
      : (imdb / 2).toFixed(1);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{movie.Title}</h1>

        <button
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          X
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* POSTER */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-lg shadow-lg w-full max-w-md"
        />

        {/* DETAILS */}
        <div className="space-y-4">
          
          {/* RATINGS */}
          <div className="space-y-2">
            <p className="text-gray-500">
              ⭐ IMDb: {movie.imdbRating}/10
            </p>

            <p className="text-gray-500">
              ⭐ Avg Rating: {avg}/5
            </p>

            <StarRating movieId={movie.imdbID} />
          </div>

          {/* META INFO */}
          <div className="space-y-1">
            <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
            <p><span className="font-semibold">Year:</span> {movie.Year}</p>

            {movie.Runtime && (
              <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
            )}

            {movie.Director && (
              <p><span className="font-semibold">Director:</span> {movie.Director}</p>
            )}

            {movie.Actors && (
              <p><span className="font-semibold">Cast:</span> {movie.Actors}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}