import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './Navbar';
import FBLink from './FBLink';

function Header() {
    return (
        <header className="w-full flex flex-row flex-wrap bg-sky-200 pb-2 text-sky-800 ">
            <div className="w-full flex flex-row flex-wrap justify-center items-center">
                <div className="relative text-center font-black">
                    <h1 className="text-white font-interTight text-2xl md:text-3xl lg:text-6xl drop-shadow-[0_4px_4px_rgba(150,150,0,1.0)] ">OCEANVIEW</h1>
                    <h2 className="text-yellow-300 font-playWrite text-lg md:text-xl lg:text-2xl absolute right-0 transform -translate-y-1/2 drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,1.0)] ">Cleaning Co.</h2>
                </div>



            </div>
            <div className=' w-full flex flex-row flex-wrap justify-center pt-1'><NavBar /></div>

        </header>
    );
}

export default Header;