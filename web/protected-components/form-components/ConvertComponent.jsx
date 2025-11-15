import { useState } from 'react';
import axios from 'axios'

import './ConvertComponent.css'

function ConvertForm() {
  const [zoom, setZoom] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const data = {
      zoom: parseInt(zoom),
      lat: parseFloat(latitude),
      long: parseFloat(longitude)
    };

    try {

      const response = await axios.post('http://localhost:8000/api/convert', data);

      if (!response.status) {
        throw new error;
      }
      
      const result = { x_tile: response.data.x_tile, y_tile: response.data.y_tile }
      console.log(result);
    } catch (error) {
      console.error('Problem with fetch', error);
    }
  };

  return (
    <div style={{
      width: '852px',
      position: 'absolute',
      top: '700px',
      right: '40px',
      zIndex: 1000,           // Puts it above the map
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
    }}>
      <header>Convert Form</header>
      <form id="convert" onSubmit={handleSubmit}>
        <input
          type="number"
          name="Zoom"
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
          placeholder="Zoom"
        />
        <input
          type="number"
          step="any"
          name="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Latitude"
        />
        <input
          type="number"
          step="any"
          name="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Longitude"
        />
        <button type="submit">Convert</button>
    </form>
    </div>
  );
}

export default ConvertForm;