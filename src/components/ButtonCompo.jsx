import React from 'react'

export default function ButtonCompo({ greetEvent }) {
  return (
    <div>
      <button
        onClick={() => greetEvent('hello ram')}
        className='bg-black text-white px-2 py-1 cursor-pointer hover:bg-gray-700'>Click TO View</button>
    </div>
  )
}
