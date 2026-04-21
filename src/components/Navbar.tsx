// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div className="flex justify-between p-4 bg-gray-900 text-white">
//       <h1 className="font-bold text-lg">🎬 Movie Review</h1>

//       <div className="flex gap-4">
//         <Link to="/">Home</Link>
//       </div>
//     </div>
//   );
// }
// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">🎬 Movie Review</h1>
      <Link to="/">Home</Link>
    </div>
  );
}