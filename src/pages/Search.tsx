// // src/pages/Search.tsx
// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { fetchSearchMovies } from "../features/movies/moviesSlice";
// import MovieCard from "../components/MovieCard";

// export default function Search() {
//   const dispatch = useAppDispatch();
//   const { searchResults, movies } = useAppSelector((s) => s.movies);

//   const [query, setQuery] = useState("");
//   const [year, setYear] = useState("");
//   const [genre, setGenre] = useState("");

//   useEffect(() => {
//     if (query.length > 2) {
//       dispatch(fetchSearchMovies(query));
//     }
//   }, [query]);

//   const baseData = query.length > 2 ? searchResults : movies;

//   const filtered = baseData.filter((m: any) => {
//     const matchYear = year ? (m.Year || "").includes(year) : true;
//     const matchGenre = genre ? (m.Genre || "").includes(genre) : true;
//     return matchYear && matchGenre;
//   });

//   return (
//     <div className="p-4">
//       {/* SEARCH */}
//       <input
//         placeholder="Search movies..."
//         onChange={(e) => setQuery(e.target.value)}
//         className="p-2 border rounded w-full mb-2 dark:bg-gray-800"
//       />

//       {/* FILTERS */}
//       <div className="flex gap-2 mb-4">
//         <input
//           placeholder="Year"
//           onChange={(e) => setYear(e.target.value)}
//           className="p-2 border rounded"
//         />

//         <select
//           onChange={(e) => setGenre(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="">All Genres</option>
//           <option>Sci-Fi</option>
//           <option>Action</option>
//         </select>
//       </div>

//       {/* MOVIES */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {filtered.map((m: any) => (
//           <MovieCard key={m.imdbID} movie={m} />
//         ))}
//       </div>
//     </div>
//   );
// }

// src/pages/Search.tsx
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((m: any) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </div>
  );
}