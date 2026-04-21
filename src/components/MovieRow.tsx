import MovieCard from "./MovieCard";

export default function MovieRow({ movies, title }: any) {
  return (
    <div className="mb-6">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}

      <div className="flex gap-4 overflow-x-auto">
        {movies.map((m: any) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </div>
  );
}