import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './Navbar';
import FBLink from './FBLink';

function Header() {
    return (
        <header className="w-full flex flex-row flex-wrap bg-sky-200 pb-2 text-sky-800 ">
            <div className="w-full flex flex-row flex-wrap justify-center items-center">
                <h1 className="text-2xl md:text-3xl lg:text-6xl text-center font-extrabold">Oceanview Cleaning Co.</h1>



            </div>
            <div className=' w-full flex flex-row flex-wrap justify-center pt-1'><NavBar /></div>

        </header>
    );
}

export default Header;