
import React, { useState, useEffect } from 'react';
import AddLocation from '../components/Locations/AddLocation';
import LocationList from '../components/Locations/LocationList';

const Profile = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('locations'));
    if (storedLocations) {
      setLocations(storedLocations);
    }
  }, []);

  const addLocation = (location) => {
    const newLocations = [...locations, location];
    setLocations(newLocations);
    localStorage.setItem('locations', JSON.stringify(newLocations));
  };

  const updateLocation = (index, updatedLocation) => {
    const newLocations = [...locations];
    newLocations[index] = updatedLocation;
    setLocations(newLocations);
    localStorage.setItem('locations', JSON.stringify(newLocations));
  };

  const deleteLocation = (index) => {
    const newLocations = locations.filter((_, i) => i !== index);
    setLocations(newLocations);
    localStorage.setItem('locations', JSON.stringify(newLocations));
  };

  return (
    <div>
      <h2>Your Locations</h2>
      <AddLocation onAddLocation={addLocation} />
      <LocationList
        locations={locations}
        onUpdateLocation={updateLocation}
        onDeleteLocation={deleteLocation}
      />
    </div>
  );
};

export default Profile;



