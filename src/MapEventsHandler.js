import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

const MapEventsHandler = ({ lat, lng, setLat, setLng, flyToLocation, setFlyToLocation, indexTriggerer }) => {
  const map = useMap();
 
  useEffect(() => { 
    if (flyToLocation) {
      map.flyTo({ lat: lat, lng: lng }, map.getZoom());            
    }
  },[lat, lng, indexTriggerer, flyToLocation, map]);  

  const handleMapClick = (e) => {
    setFlyToLocation(false);
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);   
  };

  useMapEvents({
    click: (e) => handleMapClick(e),
  }); 
};

export default MapEventsHandler