import { FaLaptop, FaMobile, FaTablet } from 'react-icons/fa';
import useWindowSize from "../hooks/useWindowSize";
const Header = ({ title }) => {
    const { width } = useWindowSize();
    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ? <FaMobile />
                : width < 992 ? <FaTablet />
                    : <FaLaptop />}
        </header>
    )
}

export default Header
