import React from 'react';
import FBLink from '../../components/FBLink';
import data from './data'

function Contact() {
  return (
    <div className='flex flex-col flex-wrap justify-start items-center font-interTight bg-low-opacity text-white text-center font-semibold drop-shadow-[4px_5px_1.5px_rgba(0,0,0,1.0)] p-2 m-auto'>
      <h2 >Contact Us</h2>
      <h3 className='w-96'><a href="tel:+18508141566" className="text-white hover:underline">{data.phone}</a></h3>
      <h3><a href="mailto:oceanviewcleans@gmail.com" className="text-white hover:underline">{data.email}</a></h3>
    <h3><FBLink message={"Connect with our Facebook"}/></h3>

    </div>
  );
}

export default Contact;
