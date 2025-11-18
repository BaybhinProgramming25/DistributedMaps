import { useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import axios from 'axios'

const RouteForm = () => {

  const map = useMap();

  const [slat, setSlat] = useState('');
  const [slon, setSlon] = useState('');
  const [dlat, setDlat] = useState('');
  const [dlon, setDlon] = useState('');
  const [markers, setMarkers] = useState([]);

 
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Remove markers on each submit 
    markers.forEach(marker => {
      map.removeLayer(marker);
    })

    const source = {
      lat: parseFloat(slat),
      lon: parseFloat(slon)
    };

    const destination = {
      lat: parseFloat(dlat),
      lon: parseFloat(dlon)
    };

    const data = { source, destination };

    try {
      
      const response = await axios.post('http://localhost:8000/api/route', data);

      if (!response.status) throw new Error('Network response was not ok');
      
      const results = response.data.formattedRoute;
      console.log(response);

      // Get descriptions and coordinates
      const descriptions = results.map(item => item.description);
      const coordinates = results.map(item => item.coordinates);

      // Get markers to display
      const markersOnly = [];
      const modDescriptions = [];

      markersOnly.push(coordinates[0]);
      setMarkers(markersOnly);
      modDescriptions.push(descriptions[0]);

      let currentDescription = descriptions[0];
      for (let i = 1; i < descriptions.length; i++) {
        if (currentDescription !== descriptions[i]) {
          markersOnly.push(coordinates[i]);
          modDescriptions.push(descriptions[i]);
          currentDescription = descriptions[i];
        }
      }

      const markers_storage = []

      markersOnly.forEach((coord, index) => {
        const marker = L.marker([coord.lat, coord.lon]).addTo(map);
        marker.bindPopup(modDescriptions[index]);
        markers_storage.push(marker);
      });

      setMarkers(markers_storage);


    } catch (error) {
      console.error('Problem with fetch', error);
    }
  };

  return (
     <div style={{
      position: 'absolute',
      top: '10px',
      right: '40px',
      zIndex: 1000,           // Puts it above the map
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
    }}>
      <header>Route Form</header>
      <form id="route" onSubmit={handleSubmit}>
        <input
          type="number"
          step="any"
          name="slat"
          value={slat}
          onChange={(e) => setSlat(e.target.value)}
          placeholder="Start Latitude"
        />
        <input
          type="number"
          step="any"
          name="slon"
          value={slon}
          onChange={(e) => setSlon(e.target.value)}
          placeholder="Start Longitude"
        />
        <input
          type="number"
          step="any"
          name="dlat"
          value={dlat}
          onChange={(e) => setDlat(e.target.value)}
          placeholder="Destination Latitude"
        />
        <input
          type="number"
          step="any"
          name="dlon"
          value={dlon}
          onChange={(e) => setDlon(e.target.value)}
          placeholder="Destination Longitude"
        />
        <button type="submit">Route</button>
      </form>
    </div>
  );
}

export default RouteForm;