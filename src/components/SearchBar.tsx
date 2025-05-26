import { useProductContext } from "../context/ProductContext";

const SearchBar = () => {
  const { search, setSearch } = useProductContext();
  return (
    <div className="relative flex-grow max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
};

export default SearchBar;
