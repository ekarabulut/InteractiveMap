import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import MapEventsHandler from './MapEventsHandler';
import { useState } from 'react';

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { Icon } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

function App() {
  let storedList = JSON.parse(localStorage.getItem('shoppinglist'));
  let initialValue = storedList ? storedList : []; 
  const [items, setItems] = useState(initialValue);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const [lat, setLat] = useState(48.86);
  const [lng, setLng] = useState(2.3522);
  
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (title) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, lat:5, lng:5, title };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }  

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div style={{ display: 'flex'}}>
      <div className="App">      
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Header title="My Locations" />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
        <Content
          items={items.filter(item => ((item.title).toLowerCase()).includes(search.toLowerCase()))}      
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
      <div style={{ width: "100%", height: "100vh"}}>
        <MapContainer center={[lat, lng]} zoom={13} style={{ width: "100%", height: '100%'}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEventsHandler setLat={setLat} setLng={setLng} />
        {/*  <SetLocationHandler setLat={setLat} setLng={setLng} /> */}
          <Marker position={[lat, lng]} icon={customIcon}>
            <Popup>
              A popup message on the marker.
            </Popup>
          </Marker>      
        </MapContainer>
      </div>
    </div>    
  );
}

export default App;
