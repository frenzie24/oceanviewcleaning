import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './Navbar';
import FBLink from './FBLink';

function Header() {
    return (
        <header className="w-screen flex flex-row flex-wrap items-start bg-sky-100 text-sky-500 p-2 fixed top-0 z-50">
            <div className="container mx-auto flex justify-around items-center">
                <h1 className="text-3xl font-bold w-max">Oceanview Cleaning Co.</h1>
                <NavBar />
                <FBLink />
            </div>
        </header>
    );
}

export default Header;