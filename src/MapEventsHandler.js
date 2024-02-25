import { useMap, useMapEvents } from 'react-leaflet';

const MapEventsHandler = ({ setLat, setLng }) => {
  const map = useMap();

  const goToLocation = () => {
    let lat = 48.8704736351283;
    let lng = 2.31039047241211;
    map.flyTo({ lat: lat, lng: lng }, map.getZoom());
    setLat(lat);
    setLng(lng);   
    console.log("qqqqqqqqq");
  }

  const handleMapClick = (e) => {
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);   
    console.log(e);
    console.log(e.latlng);
    //map.flyTo(e.latlng, map.getZoom());
    //alert(`Clicked at: ${lat}, ${lng}`);
  };

  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return (
    <div>
     {/*  <button onClick={goToLocation} style={{ position: 'fixed', top: '10px', zIndex: 400 }}>Click me</button> */}
    </div>
  );
};

export default MapEventsHandler