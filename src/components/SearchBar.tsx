import React, { useState, useCallback, useEffect } from "react";
import { Search, Mic } from "lucide-react";

const SearchBar = () => {
  //data to be retrieved from the backend
  const sampleData = [
    {
      id: 1,
      title: "Parshvi",
      url: "https://reactjs.org/",
    },
    {
      id: 2,
      title: "Maddison Greenhouse",
      url: "https://developer.mozilla.org/",
    },
    { id: 3, title: "Cineverse", url: "https://stackoverflow.com/" },
    { id: 4, title: "Terrece on the Green", url: "https://github.com/" },
    { id: 5, title: "Universal", url: "https://www.npmjs.com/" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //prevents searching during each type press and rather does the search after a pause in typing
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((term) => {
      if (term.trim() === "") {
        setSearchResults([]);
      } else {
        const results = sampleData.filter((item) =>
          item.title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
      }
    }, 300),
    []
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-2xl mb-8"
      >
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full px-5 py-3 pr-20 text-base bg-white border border-gray-200 rounded-full focus:outline-none focus:border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200"
            placeholder="Search here"
          />
          <div className="absolute right-0 top-0 mt-3 mr-4 flex items-center">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 mr-3"
              onClick={() => alert("Voice search unavailable right now")}
            >
              <Mic size={20} />
            </button>
            <button
              type="submit"
              className="text-blue-500 hover:text-blue-600>"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} className="mb-2">
                <a
                  href={result.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
