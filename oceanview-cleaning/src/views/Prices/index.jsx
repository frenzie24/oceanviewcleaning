import React from 'react';
// js file that holds data for prices while i contemplate whether or not to make a backend for this project

import data from "./data"

const Prices = () => {
  return (
    <div className="w-fit overflow-x-auto font-interTight flex flex-row flex-wrap justify-center items-center text-center text-2xl text-white font-semibold drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1.0)]">
      <h2 className='w-full font-extrabold p-4'>Common Cleaning Prices</h2>
      <table className=" min-w-content bg-sky-100 border border-gray-200 text-sky-900 mx-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Service</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            // for each entry in Services, return a row for the table
            return (
              <tr key={entry.key ? entry.key : index}>
                <td className="py-2 px-4 border-b">{entry.service}</td>
                <td className="py-2 px-4 border-b">{entry.price}{entry.isHourly ? " / hr" : " / job"}</td>
                <td className="py-2 px-4 border-b">{entry.description}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
      <h3 className='w-full text-3xl font-semibold mt-2 mx-8'>Prices are subject to change depending on project needs.</h3>
      <h3 className='w-full text-3xl font-semibold mx-8'>Please contact us with any questions!</h3>
    </div>
  );
};

export default Prices;
