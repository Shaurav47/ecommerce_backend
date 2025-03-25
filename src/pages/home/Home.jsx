import { faker } from '@faker-js/faker';
import React from 'react'
import { useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState([]);
  const handleUser = () => {
    const user = {
      id: faker.string.ulid(),
      image: faker.image.avatarGitHub(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      reaction: faker.internet.emoji()
    };
    setUsers((prev) => [...prev, user]);

  }


  return (
    <div className='p-5'>

      <button
        onClick={handleUser}
        className='bg-black text-white px-5 py-1 cursor-pointer'>Add User</button>

      {users.map((user) => {
        return <div key={user.id} className='space-y-2 flex gap-7 items-start'>
          <div>
            <h2>{user.username}</h2>
            <img src={user.image} className='h-[100px]' alt="" />

          </div>

          <button className='bg-pink-500 text-white px-2'>Remove</button>

        </div>
      })}

    </div>
  )
}
