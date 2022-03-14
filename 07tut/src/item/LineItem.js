import { FaTrash } from 'react-icons/fa';
const LineItem = ({ item, updateItemStatus, itemDelete }) => {
    return (
        <li key={item.id} className='item'>
            <input type="checkbox" onChange={() => updateItemStatus(item.id)} checked={item.checked} name="" id="" />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => updateItemStatus(item.id)}
            >{item.title}</label>
            <FaTrash role="button" onClick={() => itemDelete(item.id)} />
        </li>
    )
}

export default LineItem
