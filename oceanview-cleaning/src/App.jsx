import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';

import './App.css'
import Header from './components/Header';
function App() {


  return (
    <div className='w-screen h-screen flex flex-row flex-wrap items-start justify-center'>
      <div className='w-screen bg-image' />
      <Header />
      <Outlet />


    </div>
  );
}

export default App;
