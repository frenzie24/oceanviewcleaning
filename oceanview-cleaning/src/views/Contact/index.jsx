import React from 'react';
import FBLink from '../../components/FBLink';
import data from './data'

function Contact() {
  return (
    <div className='flex flex-col w-96 h-fit flex-wrap justify-start items-center font-interTight bg-low-opacity text-white text-center font-semibold  my-2 p-2 mx-auto'>
      <h2 >Contact Us</h2>
      <h3 className=''><a href="tel:+18508141566" className="text-white hover:underline">{data.phone}</a></h3>
      <h3><a href="mailto:oceanviewcleans@gmail.com" className="text-white hover:underline">{data.email}</a></h3>
    <h3><FBLink message={"Connect with our Facebook"}/></h3>

    </div>
  );
}

export default Contact;
