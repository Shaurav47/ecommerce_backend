import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function Home() {
  return (
    <div>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur laborum. Error odit recusandae, laborum ipsa animi hic quod ratione placeat? Culpa odio laudantium maxime? Animi dolorum itaque ullam harum?</p>

      {/* <nav className='space-x-5'>
        <NavLink to={'/'}>Page1</NavLink>
        <NavLink to={'/page-2'}>Page2</NavLink>
      </nav> */}
      <Outlet />

    </div>
  )
}
