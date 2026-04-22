import { useAppDispatch, useAppSelector } from "../app/hooks";
import { rateMovie } from "../features/movies/moviesSlice";

export default function StarRating({ movieId }: any) {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((s) => s.movies.ratings[movieId] || 0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(rateMovie({ id: movieId, rating: s }));
          }}
          className={`cursor-pointer text-xl ${
            s <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}