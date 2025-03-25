import React from 'react'
import { useState } from 'react';




export default function Home() {
  const mi = [11, 22, 33];
  const [a, b] = mi;




  const [count, setCount] = useState(1);



  const handleCount = () => {

    setCount((prev) => {
      return 9;
    });
    //  console.log(count);

  }

  console.log('render');
  console.log(count);


  return (
    <div className='p-4'>


      <h1 className='text-2xl'>{count}</h1>


      <button onClick={handleCount} className='bg-black text-white px-2 py-1 cursor-pointer'>Increment</button>




    </div>
  )
}
