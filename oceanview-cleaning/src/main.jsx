import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Carousel from './views/Carousel';
import Services from './views/Services/index.jsx';
import About from './components/About.jsx';
import Error from './views/Error'
import Contact from './views/Contact/index.jsx';
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
        path: '/Services',
        element: <Services />,
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
