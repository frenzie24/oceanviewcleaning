import React from 'react';

function Prices() {
  return (

    <div className="w-fit overflow-x-auto flex flex-row flex-wrap justify-center items-center text-center text-2xl text-white font-semibold drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1.0)]">
      <h2 className='w-full text-3xl font-semibold p-4'>Most Common Cleaning Prices</h2>
      <table className="min-w-content bg-sky-100 border border-gray-200 text-sky-900">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Service</th>
            <th className="py-2 px-4 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Realtor Prep</td>
            <td className="py-2 px-4 border-b">All Realtor Prices are a Flat Rate</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">1 Bed</td>
            <td className="py-2 px-4 border-b">$220.00</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2 Bed</td>
            <td className="py-2 px-4 border-b">$300.00</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">3 Bed</td>
            <td className="py-2 px-4 border-b">$380.00</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Condo Cleaning</td>
            <td className="py-2 px-4 border-b">$25.00 / hr</td>
          </tr>
        </tbody>
      </table>
      <h2 className='w-full text-3xl font-semibold p-4'>Prices are subject to change depending on project needs.  Please contact us with any questions!</h2>
    </div>
  );
}

export default Prices;
