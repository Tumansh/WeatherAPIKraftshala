import React from 'react';
import WeatherCard from './WeatherDisplay';

const WeatherCards = ({ weatherCards, onDelete }) => {
  const placeholders = [
    "Search for another city!",
    "Search for another city!",
    "Search for another city!",
  ];

  const displayCards = weatherCards.concat(placeholders.slice(weatherCards.length));

  return (
    <div className="weather-cards">
      {displayCards.map((weather, index) => (
        <WeatherCard key={index} weather={weather} onDelete={() => onDelete(index)} placeholder={placeholders[index]} />
      ))}
    </div>
  );
};

export default WeatherCards;
