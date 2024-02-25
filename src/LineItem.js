import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete }) => {
    return (
        <>
            <li className="item">
                <button onClick={console.log("clicked")}>
                    {item.title}
                </button>
                <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Delete ${item.item}`}
                />
            </li>
        </>        
    )
}

export default LineItem
