import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import About from '../components/About';

function Home() {
  return (
    <article className='w-full flex justify-center align-center'>
      <div className='w-fit h-fit flex flex-row flex-wrap justify-center items-start  bg-low-opacity  rounded-md'>
        <div className='flex flex-row flex-wrap justify-center items-center py-1'>
          <div className='w-[320px] h-full font-bold font-interTight text-5xl text-center max-sm:text-4xldrop-shadow-[2px_2px_1.5px_rgba(0,0,0,1.0)]'>
            <Link to="/contact">Schedule an appointment with Panama City's best independent small business cleaner!</Link>
          </div>
        </div>
        <div className='w-[320px] h-full max-sm:[160px] py-1'>
          <Link to="/carousel">
            <img src="./assets/oc-icon-full.png" alt="Oceanview Cleaning Co's logo.  Features pixel art of a cleaner standing if front of the ocean." />
          </Link>
        </div>

      </div>
    </article>
  );
}

export default Home;
