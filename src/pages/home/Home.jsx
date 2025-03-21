import React from 'react'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'

export default function Home() {
  return (
    <div className='p-4 max-sm:bg-amber-600'>


      <button className='btn'>Click The Button</button>



      <button className='btn'>Click The Next Button</button>


      <div className='card'>
        <img src="https://sanet.pics/storage-11/0325/avif/th_KonShknPGMlxqZgP3hDnJXT6bpRGnJ6q.avif" alt="" />
        <h2>hello jee</h2>
      </div>


      <div className='card'>
        <img src="https://sanet.pics/storage-11/0325/avif/th_KonShknPGMlxqZgP3hDnJXT6bpRGnJ6q.avif" alt="" />
        <h2>hello jee</h2>
      </div>

      <div className='h-[200px] w-[200px] bg-pink-400 flex-center'>
        <h1>hello</h1>
        <p>sello</p>
        <h2>kello</h2>
      </div>

      <Intro />
      <Tech />
      <Info />

    </div>
  )
}
