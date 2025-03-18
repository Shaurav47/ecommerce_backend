import React from 'react'
import Header from '../../components/Header'
import { NavLink, Outlet } from 'react-router'

export default function Home() {
  return (
    <div>
      <Header />

      <h1>This is a Home Page</h1>

      <nav className='space-x-5'>
        <NavLink to={'/page-1'}>Page1</NavLink>
        <NavLink to={'/page-2'}>Page2</NavLink>
      </nav>
      <Outlet />

    </div>
  )
}
