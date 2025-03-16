import React from 'react'

export default function PostCard({ post }) {


  return (
    <div className='w-[300px] space-y-3 shadow-2xl p-3'>
      <img className='h-[200px] w-full object-cover' src={post.imageUrl} alt="" />
      <div>
        <h1>{post.title}</h1>
        <p>{post.detail}</p>
      </div>
    </div>
  )
}
