import Header from './Header';
import SearchItem from './SearchItem';
import AddLocation from './AddLocation';
import Content from './Content';
import Footer from './Footer';
import MapEventsHandler from './MapEventsHandler';
import { useState } from 'react';

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";

// Create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38] // size of the icon
});

function App() {
  let storedList = JSON.parse(localStorage.getItem('locationsList'));
  let initialValue = storedList ? storedList : [];

  // Initialize state variables
  const [locations, setLocations] = useState(initialValue);
  const [newTitle, setNewTitle] = useState('');
  const [search, setSearch] = useState('');
  const [flyToLocation, setFlyToLocation] = useState(true);
  const [indexTriggerer, setIndexTriggerer] = useState(false);
  const startUpLocation = { lat: 51.510559, lng: -0.128059 } // London center
  const [lat, setLat] = useState(startUpLocation.lat);
  const [lng, setLng] = useState(startUpLocation.lng);
  
  // Function to update locations and save to local storage
  const setAndSaveLocations = (newLocations) => {
    setLocations(newLocations);
    localStorage.setItem('locationsList', JSON.stringify(newLocations));
  }

  // Function to add a new location to locations list
  const addLocation = (title) => {
    const id = locations.length ? locations[locations.length - 1].id + 1 : 1;
    const myNewItem = { id, lat: lat, lng: lng, title };
    const listItems = [...locations, myNewItem];
    setAndSaveLocations(listItems);
  }  

  // Function to handle deletion of a location
  const handleDelete = (id) => {
    const listItems = locations.filter((item) => item.id !== id);
    setAndSaveLocations(listItems);
  }

  // Function to handle clicking on the add button (for adding a location)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    addLocation(newTitle);
    setNewTitle('');
    setFlyToLocation(true);
  }

  // Function to handle clicking on a location in the list
  const handleGoLocation = (item) => {
    setLat(item.lat);
    setLng(item.lng);
    setFlyToLocation(true);
    setIndexTriggerer(!indexTriggerer);    
  }

  return (
    <div className='dflex'>
      <div className="manage">          
        <Header title="My Locations" />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
        <Content
          locations={locations.filter(item => ((item.title).toLowerCase()).includes(search.toLowerCase()))}      
          handleDelete={handleDelete}
          handleGoLocation={handleGoLocation}
        />
        <Footer length={locations.length} />
      </div>
      <div className='mapPart'>
      <AddLocation
          className="addNewLocation"
          lat={lat}
          lng={lng}       
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          handleSubmit={handleSubmit}
          flyToLocation={flyToLocation}
        />        
        <MapContainer center={[lat, lng]} zoom={13} className='mapContainer'>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />         
          <MapEventsHandler lat={lat} lng={lng} setLat={setLat} setLng={setLng} flyToLocation={flyToLocation} setFlyToLocation={setFlyToLocation} indexTriggerer={indexTriggerer} />
          <Marker position={[lat, lng]} icon={customIcon}>            
          </Marker>      
        </MapContainer>
      </div>
    </div>    
  );
}

export default App;
