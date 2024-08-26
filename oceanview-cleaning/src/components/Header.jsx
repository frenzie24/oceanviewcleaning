import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './Navbar';
import FBLink from './FBLink';

function Header() {
    return (
        <header className="w-screen flex flex-row flex-wrap bg-sky-200 text-sky-800 p-2 fixed top-0 z-50">
            <div className="w-full flex flex-row flex-wrap justify-center items-center">
                <h1 className="text-6xl font-extrabold px-10">Oceanview Cleaning Co.</h1>


                <div className='px-10'><FBLink /></div>
            </div>
            <div className=' w-screen flex flex-row flex-wrap justify-center pt-4'><NavBar /></div>

        </header>
    );
}

export default Header;