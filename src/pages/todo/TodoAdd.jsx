import { Button } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export default function TodoAdd() {
  return (
    <div>
      <Formik >

        {() => {
          return <form>
            <div>
              <input type="text" name='title' className='' placeholder='Title' />
            </div>
            <div>
              <textarea type="text" name='detail' className='' placeholder='Title' />
            </div>

            <Button>My Button</Button>

          </form>
        }}


      </Formik>

    </div>
  )
}
