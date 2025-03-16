import React from 'react'
import { posts } from './data/data'
import PostCard from './components/PostCard'

//js in component/---props/--routing
//how react render component/ hooks


export default function App() {

  const person = {
    address: {
      primary: 'new road',
      secondary: 'lalitpur'
    }
  };

  const { address: { primary, secondary } } = person;

  return (
    <div className='p-5'>

      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}








    </div>
  )
}


