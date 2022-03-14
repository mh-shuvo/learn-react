import Row from "./Row"
const Table = ({ items }) => {

    return (
        <table className="table-container">
            <tbody>
                {items.map((item) => {
                    return (<Row key={item.id} item={item} />);
                })}
            </tbody>
        </table>
    )
}

export default Table
