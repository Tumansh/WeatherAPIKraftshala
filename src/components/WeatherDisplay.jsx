import React from 'react';

const WeatherCard = ({ weather, onDelete, placeholder }) => {
  const { name, main, wind, dt } = weather || {};

  return (
    <div className="weather-card card">
      <div className="card-body">
        {weather && <button className="delete-btn" onClick={onDelete}>&times;</button>}
        {weather ? (
          <>
            <h2 className="card-title">{name}</h2>
            {main && (
              <>
                <p className="card-text">Temperature: {main.temp}°C</p>
                <p className="card-text">Humidity: {main.humidity}%</p>
              </>
            )}
            {wind && <p className="card-text">Wind Speed: {wind.speed} m/s</p>}
            {dt ? (
              <p className="card-text">{new Date(dt * 1000).toLocaleString()}</p>
            ) : (

              <h3 className="card-text">Search for the city!</h3>
            )}
          </>
        ) : (
          <p className="card-text">{placeholder}</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
