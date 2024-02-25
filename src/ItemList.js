import LineItem from './LineItem';

const ItemList = ({ items, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}                    
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList
