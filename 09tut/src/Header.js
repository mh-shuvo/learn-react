const Header = ({ title }) => {
    const headerStyle = {
        backgroundColor: 'blue',
        color: "white"
    };
    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: "Header Section"
}
export default Header
