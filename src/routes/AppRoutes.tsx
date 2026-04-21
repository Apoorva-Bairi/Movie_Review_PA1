// import { Routes, Route } from "react-router-dom";
// import Search from "../pages/Search";
// import MovieDetails from "../pages/MovieDetails";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Search />} />
//       <Route path="/movie/:id" element={<MovieDetails />} />
//     </Routes>
//   );
// }
// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import MovieDetails from "../pages/MovieDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}