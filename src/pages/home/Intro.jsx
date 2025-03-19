import React from 'react'

export default function Intro() {
  return (
    <div className='grid grid-cols-[1fr_1.7fr] items-center'>

      <div className=''>
        <dotlottie-player
          src="https://lottie.host/264691cd-9e20-4eb0-9c62-a9b8efa3daac/4SIuBFaDQ5.lottie"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>

      <div>
        <h1 className='font-bold text-2xl'>Hi, I am John</h1>
        <p className='text-pink-600 italic'>Dev, Ai, Machine Learning</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea ipsum. Porro sunt est, amet necessitatibus perspiciatis asperiores ex quibusdam vitae voluptatem fugiat praesentium dignissimos soluta vel quisquam ipsa. Quae!</p>

      </div>








    </div>
  )
}
