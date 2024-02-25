import { useRef } from 'react';

const AddLocation = ({ lat, lng, newTitle, setNewTitle, handleSubmit, flyToLocation }) => {
    const inputRef = useRef();

    return (
        <div className='addForm'>
            {!flyToLocation && <form onSubmit={handleSubmit}>                
                <input
                    autoFocus
                    ref={inputRef}
                    id='addItem'
                    type='text'
                    placeholder='Location title'
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button
                    className='addLocation'
                    type='submit'
                    aria-label='Add Item'
                    onClick={() => inputRef.current.focus()}
                >
                    Add
                </button>
            </form>}
            <div className='textCenter'> {lat.toFixed(6)}, {lng.toFixed(6)}</div>
        </div>        
    )
}

export default AddLocation
