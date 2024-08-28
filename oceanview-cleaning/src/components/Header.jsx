import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './Navbar';
import FBLink from './FBLink';
import Logo from './Logo';

function Header() {
    return (
        <header className="w-full flex flex-col flex-wrap justify-center items-center bg-sky-200 border-b-2 border-sky-600 pb-2 text-sky-800 ">
            <Logo large={true}/>
            <div className='border-4 border-t-2 border-sky-800 hover:border-sky-900 rounded-xl mt-2'><NavBar /></div>

        </header>
    );
}

export default Header;