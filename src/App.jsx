import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from './api';
import WeatherCards from './components/WeatherSlider';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [weatherCards, setWeatherCards] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeatherCards((prev) => [...prev, data]);
    } catch (error) {
      alert(`Cannot fetch the weather for ${city}. Please try again.`);
    }
  };

  const handleDelete = (index) => {
    setWeatherCards((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="app text-center">
      <div className="container">
        <h2 className="main-heading my-3 mb-5">Weather API Task by Tumansh Vij</h2>
        <SearchBar
          onSearch={handleSearch}
          onModeChange={toggleMode}
          darkMode={darkMode}
        />
        <h3 className="locations mt-5 text-white">
          Locations you have previously searched for
        </h3>
        <WeatherCards weatherCards={weatherCards} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
