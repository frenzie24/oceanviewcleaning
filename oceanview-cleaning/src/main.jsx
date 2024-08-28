import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Carousel from './views/Carousel';
import PricesAndContact from './views/PricesAndContact';
import About from './components/About.jsx';
import Error from './views/Error'
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },

      {
        path: '/Carousel',
        element: <Carousel />,
      },
      {
        path: '/PricesAndContact',
        element: <PricesAndContact />,
      },


    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
