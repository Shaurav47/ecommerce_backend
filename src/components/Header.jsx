import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white py-2 px-5 flex items-baseline justify-between'>
      <h1 className='text-xl'>Tailwind</h1>


      <nav className='space-x-5'>

        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </nav>

    </div>
  )
}
