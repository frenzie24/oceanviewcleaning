import React from 'react';

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './views/Home';
import CarouselPage from './views/Carousel';
import Contact from './views/Contact';
import Prices from './views/Prices';
import NavBar from './components/Navbar';

function App() {


  return (
    <div>
      <NavBar />
      <Outlet></Outlet>


    </div>
  );
}

export default App;
