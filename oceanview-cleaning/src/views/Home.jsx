import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import About from '../components/About';

function Home() {
  return (
    <div className='w-full max-sm:h-fit h-full flex flex-row flex-wrap justify-center items-start py-8'>
      <div className='h-[320px] flex flex-row flex-wrap justify-center max-sm:items-start items-center p-2'>
        <div className='w-[280px] font-bold font-interTight text-4xl text-center md:text-4xl drop-shadow-[2px_2px_1.5px_rgba(0,0,0,1.0)] sm:text-right'>
        <Link to="/contact">Schedule an appointment with Panama City's best independent small business cleaner!</Link>
        </div>
      </div>
      <div className='w-[320px] h-[320px] p-2'>
        <Link to="/carousel">
        <img src="./assets/oc-icon-full.png" alt="Oceanview Cleaning Co's logo.  Features pixel art of a cleaner standing if front of the ocean." />
        </Link>
      </div>

    </div>
  );
}

export default Home;
