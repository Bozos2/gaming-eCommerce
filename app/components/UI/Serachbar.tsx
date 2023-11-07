import SearchIcon from "@/app/assets/NavbarIcons/SearchIcon";

const Search = () => {
  return (
    <div className="relative max-w-xs">
      <span className="pointer-events-none  absolute text-center top-1/2  transform -translate-y-1/2 left-3 focus:bg-rose-600">
        <SearchIcon />
      </span>
      <input
        className="border border-white rounded-md pl-12 w-full h-12 focus:outline focus:outline-rose-600 focus:border-rose-600 "
        type="text"
        placeholder="Pretraži..."
      />
    </div>
  );
};

export default Search;
