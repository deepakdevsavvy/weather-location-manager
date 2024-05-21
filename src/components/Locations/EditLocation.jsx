
import React, { useState, useEffect } from 'react';

const EditLocation = ({ location, onUpdateLocation, onCancelEdit }) => {
  const [city, setCity] = useState(location.city);
  const [country, setCountry] = useState(location.country);
  const [nickname, setNickname] = useState(location.nickname);

  const handleUpdate = () => {
    onUpdateLocation({ city, country, nickname });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      <div>
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>
      <div>
        <label>Country</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
      </div>
      <div>
        <label>Nickname</label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <button type="submit">Update</button>
      <button type="button" onClick={onCancelEdit}>Cancel</button>
    </form>
  );
};

export default EditLocation;





