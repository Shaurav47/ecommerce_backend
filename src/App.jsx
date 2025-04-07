import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './components/RootLayout';
import TodoPage from './pages/todo/TodoPage';
import { RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage';


export default function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'add-todo',
          element: <TodoPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}
