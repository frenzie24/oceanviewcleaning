import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
    const currentPage = useLocation().pathname;

    const renderCursor = (path) => {

        return currentPage === path && <span className="blinking-cursor"></span>;
    };


    return (
        <nav >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/carousel">Carousel</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/prices">Prices</Link></li>
            </ul>
        </nav>
    )
}
