import { Button, Input, Textarea } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export default function TodoAdd() {
  return (
    <div>

      <Formik>


        {() => {
          return <form className='max-w-[400px] space-y-4'>
            <div>
              <Input label='Title' name='title' />
            </div>
            <div>
              <Textarea label='Description' name='description' />
            </div>


          </form>
        }}


      </Formik>



    </div>
  )
}
