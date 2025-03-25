import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white py-2 px-5 flex items-baseline justify-between'>
      <h1 className='text-xl'>Tailwind</h1>


      <nav className='space-x-5 max-sm:hidden'>

        <NavLink className={(e) => e.isActive ? 'text-red-700' : ''} to={'/about'}>About</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-amber-400' : ''}
          to={'/contact'}>Contact</NavLink>
      </nav>

    </div>
  )
}
