import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css"
import "./searchBarConnector.js"

const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearch = () => {
    onSearch(filteredData);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <FaSearch />
      </button>
      {filteredData.length > 0 && (
        <ul className="search-results">
          {filteredData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
