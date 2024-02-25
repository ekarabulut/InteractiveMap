import LineItem from './LineLocation';

const ItemList = ({ locations, handleDelete, handleGoLocation }) => {
    return (
        <ul>
            {locations.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}                    
                    handleDelete={handleDelete}
                    handleGoLocation={handleGoLocation}
                />
            ))}
        </ul>
    )
}

export default ItemList
