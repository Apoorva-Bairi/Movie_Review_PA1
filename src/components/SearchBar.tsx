export default function SearchBar({ onSearch }: any) {
  return (
    <input
      placeholder="Search movies..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded mb-3 dark:bg-gray-800"
    />
  );
}