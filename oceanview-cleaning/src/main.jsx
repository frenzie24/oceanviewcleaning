import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Carousel from './views/Carousel';
import Contact from './views/Contact';
import Prices from './views/Prices';
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
        path: '/Carousel',
        element: <Carousel />,
      },
      {
        path: '/Prices',
        element: <Prices />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
