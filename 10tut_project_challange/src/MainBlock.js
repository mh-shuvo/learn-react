const MainBlock = ({ color, label }) => {
    const mainBlockStyle = {
        backgroundColor: color,
    };
    return (
        <div className="MainBlock" style={mainBlockStyle}>
            <h4>{label}</h4>
        </div>
    )
}

export default MainBlock
