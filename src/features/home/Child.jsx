import { Button } from '@material-tailwind/react';
import React, { memo } from 'react'

export default memo(function Child({ func }) {
  console.log('child render');

  return (
    <div>
      <button>{func()}</button>

      <h1>Child Render</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente accusamus, amet aliquid itaque omnis ducimus? Porro aspernatur, commodi a natus id est aliquid fugit inventore impedit doloremque doloribus vero placeat.</p>

    </div>
  )
})
