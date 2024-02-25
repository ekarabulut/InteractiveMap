import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete, handleGoLocation }) => {
    return (
        <>
            <li className="item">
                <button onClick={() => {handleGoLocation(item)}}>
                    {item.title}
                </button>
                <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"                   
                />
            </li>
        </>        
    )
}

export default LineItem
