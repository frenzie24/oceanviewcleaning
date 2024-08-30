import React from 'react';
import Prices from '../Prices/index.jsx';
import Contact from '../Contact/index.jsx';

function Services() {

    return (
        <div className='flex flex-row flex-wrap w-full justify-center'>
            <Prices />
            <div className='mt-4'>
            <Contact />
            </div>
        </div>
    );
}


export default Services;