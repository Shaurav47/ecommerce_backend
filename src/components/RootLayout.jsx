import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col max-w-[1500px] mx-auto'>
      <main className='flex-1'>
        <Header />

        <Outlet />
      </main>



    </div>
  )
}
