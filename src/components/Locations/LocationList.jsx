// src/components/Locations/LocationList.js
import React from 'react';
import Location from '../Location';

const LocationList = ({ locations, onUpdateLocation, onDeleteLocation }) => (
  <div>
    {locations.length === 0 ? (
      <p>No locations added yet.</p>
    ) : (
      <ul>
        {locations.map((location, index) => (
          <Location
            key={index}
            index={index}
            location={location}
            onUpdateLocation={onUpdateLocation}
            onDeleteLocation={onDeleteLocation}
          />
        ))}
      </ul>
    )}
  </div>
);

export default LocationList;

