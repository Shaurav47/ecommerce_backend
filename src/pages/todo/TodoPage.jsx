import React, { useActionState } from 'react'
import TodoAdd from './TodoAdd'
import { Button, Input } from '@material-tailwind/react'
import axios from 'axios'

const handleSubmit = async (prevState, formData) => {
  // console.log(formData.get('title'));
  try {

    await axios.post('https://67f1efe1c733555e24ae5ba7.mockapi.io/blogs', {
      title: formData.get('title'),
      detail: formData.get('detail'),
    });
    return 'success';

  } catch (err) {

  }



}

export default function TodoPage() {

  const [result, formAction, pending] = useActionState(handleSubmit, null);

  console.log(result);
  // console.log(m);

  return (
    <div className='p-5'>

      {/* <h1>This is Todo page</h1> */}

      <form action={formAction} className='max-w-[300px] space-y-4'>
        <div>
          <Input name='title' label='Title' />
        </div>
        <div>
          <Input name='detail' label='Detail' />
        </div>

        <Button
          loading={pending}
          type='submit'>Submit</Button>

      </form>


      {/* <TodoAdd /> */}

    </div>
  )
}
