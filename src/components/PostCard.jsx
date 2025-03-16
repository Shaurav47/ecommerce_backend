import React from 'react'

export default function PostCard() {
  return (
    <div className='w-[300px] space-y-3 shadow-2xl p-3'>
      <img className='h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1725714355052-0233eceae98f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vero deserunt tempore placeat eum doloribus.</p>
      </div>
    </div>
  )
}
