import React from 'react';
// js file that holds data for prices while i contemplate whether or not to make a backend for this project

import data from "./data"

const Prices = () => {
  return (
    <div className=" w-full overflow-x-auto font-interTight flex flex-row flex-wrap justify-center items-center text-center text-xl max-sm:text-xs max-md:text-md text-white font-semibold drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1.0)]">
      <h2 className='w-full max-lg:w-[400px] font-extrabold p-4'>Common Cleaning Prices</h2>
      <table className=" min-w-content max-w-[800px] max-sm:text-left bg-sky-100 border-gray-200 text-sky-600 mx-10">
        <thead>
          <tr className='border-b-4 border-sky-600 text-sky-100 bg-sky-600'>
            <th className="py-2 px-4 ">Service</th>
            <th className="py-2 px-16 max-sm:px-4">Price</th>
            <th className="py-2 px-4 ">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            // for each entry in Services, return a row for the table
            return (
              <tr key={entry.key ? entry.key : index}>
                <td className="py-2 px-4 border-b-1 border-sky-400">{entry.service}</td>
                <td className="py-2 px-4 border-b-1 border-sky-100">{entry.price}{entry.isHourly ? " / hr" : " / job"}</td>
                <td className="py-2 px-4 border-b-1 border-sky-100">{entry.description}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
      <h3 className='w-full mt-2 mx-8'>Prices are subject to change depending on project needs.</h3>
      <h3 className='w-full mx-8'>Please contact us with any questions!</h3>
    </div>
  );
};

export default Prices;
