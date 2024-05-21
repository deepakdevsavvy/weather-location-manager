// src/components/Location.js
import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';
import EditLocation from './Locations/EditLocation';

const Location = ({ location, index, onUpdateLocation, onDeleteLocation }) => {
  const [weather, setWeather] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getWeatherData(location.city, location.country).then((data) => {
      setWeather(data);
    });
  }, [location.city, location.country]);

  const handleUpdate = (updatedLocation) => {
    onUpdateLocation(index, updatedLocation);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <EditLocation
          location={location}
          onUpdateLocation={handleUpdate}
          onCancelEdit={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h4>{location.city}, {location.country} {location.nickname && `(${location.nickname})`}</h4>
          {weather && (
            <p>{weather.temperature}°C, {weather.description}</p>
          )}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteLocation(index)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Location;
