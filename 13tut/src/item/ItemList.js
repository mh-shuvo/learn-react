import LineItem from "./LineItem";
const ItemList = ({ items, updateItemStatus, itemDelete }) => {
    return (
        <ul style={{ listStyle: "none" }}>
            {items.map((item) => {
                return <LineItem key={item.id} item={item}
                    updateItemStatus={updateItemStatus}
                    itemDelete={itemDelete} />
            })}
        </ul>
    )
}

export default ItemList
