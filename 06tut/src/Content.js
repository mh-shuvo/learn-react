import { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
const Content = () => {
    let allItems = [
        {
            id: 1,
            title: "Feni",
            checked: true
        },

        {
            id: 2,
            title: "Dhaka",
            checked: false
        },

        {
            id: 3,
            title: "Chittagong",
            checked: true
        },

        {
            id: 4,
            title: "Gazipur",
            checked: false
        },

        {
            id: 5,
            title: "Cumilla",
            checked: true
        },

    ];

    const [items, setItems] = useState(allItems);

    const updateItemStatus = (key) => {
        const updatedItems = items.map((item) => {
            if (item.id == key) {
                item.checked = !item.checked;
            }
            return item;
        });
        setItems(updatedItems);
    }
    const itemDelete = (key) => {
        const updatedItems = items.filter((item) => {
            if (item.id != key) {
                return item;
            }
        });
        setItems(updatedItems);
    }

    return (
        <main>
            {items.length ? (
                <ul style={{ listStyle: "none" }}>
                    {items.map((item) => {
                        return <li key={item.id} className='item'>
                            <input type="checkbox" onChange={() => updateItemStatus(item.id)} checked={item.checked} name="" id="" />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => updateItemStatus(item.id)}
                            >{item.title}</label>
                            <FaTrash role="button" onClick={() => itemDelete(item.id)} />
                        </li>
                    })}
                </ul>
            ) : (
                <p style={{ marginTop: "2rem" }}>Cart is Empty</p>
            )
            }

        </main >
    )
}

export default Content
