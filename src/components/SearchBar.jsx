import React, { useState } from 'react';

const SearchBar = ({ onSearch, onModeChange, darkMode }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="container">
      <div className="row mb-3 justify-content-center">
        <div className="col-7">
          <input
            type="text"
            className="form-control mx-auto"
            style={{ width: '100%' }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            aria-label="Enter city name"
          />
        </div>
        <div className="col-3">
          <button
            className={`btn ${darkMode ? 'btn-blue' : 'btn-yellow'} w-100`}
            type="button"
            onClick={handleSearch}
          >
            Fetch the Weather Report!
          </button>
        </div>
        <div className="col-2">
          <button
            className={`btn ${darkMode ? 'btn-blue' : 'btn-yellow'} w-100`}
            type="button"
            onClick={onModeChange}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
