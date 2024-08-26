import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
    const currentPage = useLocation().pathname;


    return (
        <nav >
            <ul className='w-fit flex flex-row flex-wrap text-2xl text-black bg-sky-700 rounded-lg [&_li]:p-2 [&_*]:text-white [&_*]:hover:text-white '>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/">Home</Link></li>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/carousel">Examples</Link></li>
                <li className='hover:bg-sky-800 hover:rounded-lg'><Link to="/pricesandcontact">Contact and Pricing</Link></li>
            </ul>
        </nav>
    )
}
