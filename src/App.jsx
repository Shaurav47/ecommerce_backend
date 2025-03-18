import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Page1 from './pages/home/nested-pages/Page1';
import Page2 from './pages/home/nested-pages/Page2';

//js in component/---props/--routing
//how react render component/ hooks


export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'page-1',
          element: <Page1 />
        },
        {
          path: 'page-2',
          element: <Page2 />
        },
      ]
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


