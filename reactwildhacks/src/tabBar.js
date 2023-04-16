import React, { useState } from "react";
import logo from './assets/noBackgroundLogo.png';
import countries from './countries.js';
import SearchBar from './searchBar';

function TabBar({ showSearchBar }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredCountries);
  };

  return (
    <div
      className="flexbox-container"
      style={{
        backgroundColor: '#07bbf2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        zIndex: 9999 // set a high z-index value
      }}
    >
      <div
        className="logo-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          zIndex: 9999 // set a high z-index value
        }}
      >
        <div
          className="logo"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            zIndex: 9999 // set a high z-index value
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: 50,
              width: 200,
              objectFit: 'cover',
              objectPosition: 'center',
              marginLeft: -80,
              zIndex: 9999 // set a high z-index value
            }}
          />
        </div>
        <div className="home-button" style={{ marginLeft: '20px' }}>
          <button
            style={{
              backgroundColor: 'white',
              color: '#07bbf2',
              borderRadius: '20px',
              padding: '5px 20px',
              border: 'none',
              fontFamily: 'Lilita One',
              fontWeight: 'bold',
              fontSize: '15px',
              cursor: 'pointer',
              marginLeft: -50,
              zIndex: 9999 // set a high z-index value
            }}
          >
            Home
          </button>
        </div>
      </div>
      {showSearchBar && (
        <div style={{ position: 'relative', zIndex: 9999 }}>
          <SearchBar onSearch={handleSearch} countries={countries} />
          {searchResults.length > 0 && (
            <div
              className="search-results"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'white',
                zIndex: 1,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '4px',
                padding: '10px',
              }}
            >
              {searchResults.map((result) => (
                <div key={result}>{result}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TabBar;
