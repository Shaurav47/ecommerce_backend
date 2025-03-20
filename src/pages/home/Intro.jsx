import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

export default function Intro() {
  return (
    <div className='grid grid-cols-[1fr_1.7fr] items-center'>

      <div className=''>

        {/* <DotLottieReact
          src="https://lottie.host/d4290861-659d-4790-872c-85964be6152d/aqCug3yjlk.lottie"
          loop
          renderersettings={{
            preserveAspectRatio: "soluta",
          }}

          autoplay
        /> */}
        <dotlottie-player
          src="https://lottie.host/583960f3-7a13-4193-9f3f-b7035e356c23/Tzq5kJD5V8.lottie"
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
