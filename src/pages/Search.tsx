import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const { movies } = useAppSelector((s) => s.movies);

  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const filtered = movies.filter((m: any) => {
    return (
      m.Title.toLowerCase().includes(query.toLowerCase()) &&
      (year ? m.Year.includes(year) : true) &&
      (genre ? m.Genre === genre : true)
    );
  });

  return (
    <div className="p-4">
      <SearchBar onSearch={setQuery} />

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
          className="p-2 border rounded"
        />

        <select
          onChange={(e) => setGenre(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Genres</option>
          <option>Action</option>
          <option>Sci-Fi</option>
          <option>Drama</option>
          <option>Fantasy</option>
          <option>Romance</option>
        </select>
      </div>

          {filtered.length === 0 && (query || year || genre) ? (
              <p className="text-center text-gray-500 mt-6 text-lg">
                  No movies found
              </p>
          ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filtered.map((m: any) => (
                      <MovieCard key={m.imdbID} movie={m} />
                  ))}
              </div>
          )}
    </div>
  );
}