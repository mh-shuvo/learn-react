import ItemList from './item/ItemList'
const Content = ({ items, updateItemStatus, itemDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    updateItemStatus={updateItemStatus}
                    itemDelete={itemDelete}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}>Cart is Empty</p>
            )
            }

        </>
    )
}

export default Content
