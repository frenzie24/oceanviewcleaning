import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
    const currentPage = useLocation().pathname;


    return (
        <nav >
            <ul className='w-fit flex flex-row flex-wrap bg-sky-600 rounded-md border-4 border-sky-950
            text-sky-100 [&_li]:mr-1 [&_li]:my-1 [&_li]:p-1  [&_*]:text-white [&_*]:hover:text-white
            [&_li]:border-4 [&_li]:border-t-2 [&_li]:border-sky-800 [&_li]:rounded-md '>
               <Link to="/"> <li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500 ml-1'>Home</li></Link>
                <Link to="/about"><li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'>About</li></Link>
                <Link to="/carousel"><li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'>Examples</li></Link>
           <Link to="/contact"><li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'>Contact</li></Link>
                <Link to="/services"><li className='text-xs md:text-lg hover:bg-sky-700 hover:border-sky-500'>Services</li></Link>
            </ul>
        </nav>
    )
}
