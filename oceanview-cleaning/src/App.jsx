import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';

import './App.css'
function App() {


  return (
    <div>
      <NavBar />
      <Outlet />


    </div>
  );
}

export default App;
