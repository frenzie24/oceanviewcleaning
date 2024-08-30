import React from 'react';
import About from '../components/About';

function Home() {
  return (
    <div className='w-full h-full '>
      <div className='w-full flex flex-row flex-wrap items-start justify-center mt-8'>
      <div className='w-[240px] md:[w-480px] lg:[w-600px] xl:[w-600px] font-bold font-interTight text-4xl sm:text-2xl md:text-3xl pb-20 drop-shadow-[2px_2px_1.5px_rgba(0,0,0,1.0)] text-right mr-20 mb-60'>
        Schedule an appointment with Panama City's best independent small business cleaner!
      </div>
      <div>
        <img src="./assets/oc-icon-256.png" alt="Oceanview Cleaning Co's logo.  Features pixel art of a cleaner standing if front of the ocean." />
      </div>
      </div>
    </div>
  );
}

export default Home;
