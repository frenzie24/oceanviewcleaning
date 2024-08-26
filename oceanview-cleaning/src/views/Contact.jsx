import React from 'react';
import FBLink from '../components/FBLink';

function Contact() {
  return (
    <div className='mx-auto text-2xl text-white text-center drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1.0)]'>
      <h1 className='font-bold'>Contact Us</h1>
      <p><a href="mailto:oceanviewcleans@gmail.com" className="text-white hover:underline">oceanviewcleans@gmail.com</a></p>
      <p><a href="tel:+18508141566" className="text-white hover:underline">(850) 814-1566</a></p>

    </div>
  );
}

export default Contact;
