import { useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios'

const SearchForm = () => {

  const map = useMap();
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyInBox, setOnlyInBox] = useState(false);
  const [markers, setMarkers] = useState([]);

  const removeMarkers = () => {
    markers.forEach(marker => map.removeLayer(marker));
    setMarkers([]);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const minLat = map.getBounds().getSouthWest().lat;
    const minLon = map.getBounds().getSouthWest().lng;
    const maxLat = map.getBounds().getNorthEast().lat;
    const maxLon = map.getBounds().getNorthEast().lng;

    const bbox = { minLat, minLon, maxLat, maxLon };
    const data = { bbox, onlyInBox, searchTerm };

    try {

      const response = await axios.post('http://localhost:8000/api/search', data);
      console.log(response);

      if (!response.status) {
        throw new Error('Network response was not ok');
      }
      
      const results = response.data

      const list = document.getElementById("list");
      if (list) {
        list.innerHTML = '';
      }
      else {
        const newList = document.createElement('ul');
        newList.id = 'list'
        document.body.appendChild(newList);
      }

      if (onlyInBox) {
        removeMarkers();
        const newMarkers = [];
        
        results.forEach(place => {
          const marker = L.marker([place.coordinates.lat, place.coordinates.lon]).addTo(map);
          marker.bindPopup(place.name);
          marker.on('click', () => {
            map.setView([place.coordinates.lat, place.coordinates.lon], 14);
          });
          newMarkers.push(marker);
        });
        
        setMarkers(newMarkers);
      } else {
        if (results.length === 1) {
          removeMarkers();
          const marker = L.marker([results[0].coordinates.lat, results[0].coordinates.lon]).addTo(map);
          marker.bindPopup(results[0].name);
          map.setView([results[0].coordinates.lat, results[0].coordinates.lon], 14);
          setMarkers([marker]);
        } else if (results.length > 1) {
          const list = document.getElementById('list');
          if (list) {
            results.forEach(place => {
              const listItem = document.createElement('li');
              listItem.textContent = place.name;
              listItem.addEventListener('click', () => {
                map.setView([place.coordinates.lat, place.coordinates.lon], 14);
              });
              listItem.style.color = 'blue';
              listItem.style.backgroundColor = 'yellow';
              listItem.style.padding = '10px';
              listItem.style.marginBottom = '10px';
              listItem.style.cursor = 'pointer';
              list.appendChild(listItem);
            });
          }
        }
      }
    } catch (error) {
      console.error('Problem with fetch', error);
    }
  };

  return (
    <div style={{
      width: '852px',
      position: 'absolute',
      top: '400px',
      right: '40px',
      zIndex: 1000,           // Puts it above the map
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
    }}>
    <header>Search Form</header>
    <form id="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          name="onlyInBox"
          checked={onlyInBox}
          onChange={(e) => setOnlyInBox(e.target.checked)}
        />
        Only in box
      </label>
      <button type="submit">Search</button>
    </form>
    </div>
  );
}

export default SearchForm;