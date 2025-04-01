import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home/Home';
import RootLayout from './components/RootLayout';
import NotFound from './pages/NotFound';
import CategoryItems from './pages/category_items/CategoryItems';
import ItemDetail from './pages/item-detail/ItemDetail';

//js in component/---props/--routing
//how react render component/ hooks


export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,

        },

        {
          path: 'category-items/:label',
          element: <CategoryItems />
        },


        {
          path: 'item-detail/:id',
          element: <ItemDetail />
        },





      ]
    },

    {
      path: '*',
      element: <NotFound />

    }



  ]);



  return <RouterProvider router={router} />
}


