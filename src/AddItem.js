//import { useMap, useMapEvents } from 'react-leaflet';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ lat, lng, setLat, setLng, newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

 // const map = useMap();

  const goToLocation = () => {
   /*  let lat = 48.8704736351283;
    let lng = 2.31039047241211;
    map.flyTo({ lat: lat, lng: lng }, map.getZoom());
    setLat(lat);
    setLng(lng);   
    console.log("qqqqqqqqq"); */
  }

  const handleMapClick = (e) => {
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);   
    console.log(e);
    console.log(e.latlng);
    //map.flyTo(e.latlng, map.getZoom());
    //alert(`Clicked at: ${lat}, ${lng}`);
  };

 /* useMapEvents({
    click: (e) => handleMapClick(e),
  });*/

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Location</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Location'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
