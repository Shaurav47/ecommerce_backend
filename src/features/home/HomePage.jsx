import React, { useMemo, useState } from 'react'
import Child from './Child'
import { Button, Typography } from '@material-tailwind/react'

export default function HomePage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount1((prev) => prev + 1);
  }

  const handleCount2 = () => {
    setCount2((prev) => prev - 1);
  }

  //heavy function
  const dependonCount1 = () => {
    console.log('Function RUn')
    return count1 * 9;
  };

  console.log('parent render');
  return (
    <div className='space-y-5'>
      <div>

        {/* <h1>Count1: {count1}</h1> */}
        <Button size='sm' onClick={handleCount1}>Increment</Button>
        <h1>This is Home </h1>
        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quas!</Typography>
      </div>
      <div>
        <h1>Count2: {count2}</h1>
        <Button size='sm' onClick={handleCount2}>Decrement</Button>
        <h1>This is Home </h1>
        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quas!</Typography>
      </div>


      <hr />

      <Child func={dependonCount1} />

    </div>
  )
}
