import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

//js in component/---props/--routing
//how react render component/ hooks


export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },

  ]);



  return <RouterProvider router={router} />
}


