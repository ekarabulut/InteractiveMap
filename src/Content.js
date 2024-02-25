import ItemList from './LocationList';

const Content = ({ locations, handleDelete, handleGoLocation }) => {
    return (
        <main>
            {locations.length ? (
                <ItemList
                    locations={locations}                
                    handleDelete={handleDelete}
                    handleGoLocation={handleGoLocation}
                />
            ) : (
                <p className='mt'>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content
