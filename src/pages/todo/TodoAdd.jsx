import { Button, Input, Textarea } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export default function TodoAdd() {
  return (
    <div className='max-w-[400px]'>
      <Formik >

        {() => {
          return <form className='space-y-4'>
            <div>
              <Input label='Title' name='title' />
            </div>
            <div>
              <Textarea label='Detail' name='detail' />
            </div>
            <Button type='submit' className='py-2'>Submit</Button>
          </form>
        }}


      </Formik>

    </div>
  )
}
