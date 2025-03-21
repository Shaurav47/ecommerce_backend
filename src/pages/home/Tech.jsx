import React from 'react'
import { DiDart, DiGithub, DiGo, DiJava, DiJavascript, DiNodejs, DiPython, DiReact, DiRuby } from 'react-icons/di'



export default function Tech() {
  return (
    <div className='grid grid-cols-(--my-grid) justify-items-center'>

      <DiReact className='hover:scale-110 hover:text-red-500 transition ease-out cursor-pointer duration-300 ' size={200} />
      <DiPython size={200} />
      <DiJavascript size={200} />
      <DiNodejs size={200} className='animate-bounce' />
      <DiDart size={200} />
      <DiJava size={200} />
      <DiGithub size={200} />
      <DiGo size={200} />
      <DiRuby size={200} />



      {/* <SomeCompo>
        <h1>hello jee </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, laudantium.</p>
      </SomeCompo> */}
    </div>
  )
}

function SomeCompo({ children }) {

  return (
    <div>
      {children}

    </div>
  )
}
