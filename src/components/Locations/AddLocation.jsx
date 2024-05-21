
import React, { useState } from 'react';

const AddLocation = ({ onAddLocation }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [nickname, setNickname] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && country) {
      onAddLocation({ city, country, nickname });
      setCity('');
      setCountry('');
      setNickname('');
      setVisible(false);
    }
  };

  return (
    <div>
      {visible ? (
        <form onSubmit={handleSubmit}>
          <h3>Add New Location</h3>
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
          <button type="submit">Add Location</button><button onClick={()=>setVisible(false)} >Close</button>
        </form>
      ) : (
        <div>
        <h1>Weather Data</h1>
        <button onClick={()=>setVisible(true)} >Add Location</button>
        </div>
      )}
    </div>
  );
};

export default AddLocation;
