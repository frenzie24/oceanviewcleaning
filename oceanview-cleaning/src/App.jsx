import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';

import './App.css'
import Header from './components/Header';
import { useState } from 'react';
function App() {

  const images = [
    'beach1.jpg',
    'beach2.jpg',
    'beach3.jpg',
    'beach4.jpg',
    'beach5.jpg',
    'beach6.jpg',
    'beach7.jpg'
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  return (
    <div className='w-screen h-screen flex flex-row flex-wrap '>
      <div className='bg-image'><img className='bg-image ' src={`./assets/backgrounds/${randomImg}`}></img></div>
      <Header />
      <Outlet />


    </div>
  );
}

export default App;
