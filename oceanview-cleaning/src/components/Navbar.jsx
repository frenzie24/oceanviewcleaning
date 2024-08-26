import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
    const currentPage = useLocation().pathname;


    return (
        <nav className='w-screen flex flex-row flex-wrap justify-center items-center' >
            <ul className='w-fit flex flex-row flex-wrap justify-center items-center text-2xl text-black bg-sky-600 rounded-lg [&_li]:p-2 [&_*]:text-white [&_*]:hover:text-white '>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/">Home</Link></li>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/carousel">Carousel</Link></li>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/contact">Contact</Link></li>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/prices">Prices</Link></li>
            </ul>
        </nav>
    )
}
