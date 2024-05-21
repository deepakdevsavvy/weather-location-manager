// src/components/WeatherComponent.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherData } from '../services/weatherService';

const WeatherComponent = () => {
  const { city, country } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      const data = await getWeatherData(city, country);
      if (data) {
        setWeather(data);
      } else {
        setError('Failed to fetch weather data.');
      }
      setLoading(false);
    };

    fetchWeather();
  }, [city, country]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Weather in {city}, {country}</h2>
      {weather && (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Description: {weather.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
