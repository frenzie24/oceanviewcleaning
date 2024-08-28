import React from 'react';
import FBLink from '../components/FBLink';
import {data as contact_data} from './data';

function Contact() {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center font-interTight text-2xl text-white text-center drop-shadow-[2px_1.5px_1.5px_rgba(0,0,0,1.0)] pb-10'>
      <h2 className='font-bold'>Contact Us</h2>
      <p><a href="tel:+18508141566" className="text-white hover:underline">{data.phone}</a></p>
      <p><a href="mailto:oceanviewcleans@gmail.com" className="text-white hover:underline">{data.email}</a></p>
      <p>Connect with us on Facebook</p>
      <FBLink />
    </div>
  );
}

export default Contact;
