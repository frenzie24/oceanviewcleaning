import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
    const currentPage = useLocation().pathname;


    return (
        <nav >
            <ul className='w-fit flex flex-row flex-wrap bg-sky-600 rounded-md
            text-sky-100 [&_li]:mr-1 [&_li]:my-1 [&_li]:p-1  [&_*]:text-white [&_*]:hover:text-white
            [&_li]:border-4 [&_li]:border-t-2 [&_li]:border-sky-800 [&_li]:rounded-md '>
                <li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500 ml-1'><Link to="/">Home</Link></li>
                <li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'><Link to="/carousel">Examples</Link></li>
                <li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'><Link to="/about">About</Link></li>
                <li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'><Link to="/services">Services</Link></li>
            </ul>
        </nav>
    )
}
