import React from 'react'
import './Roll.css'



function Roll({roll}) {



  return (
    <h2>I'm a <span className='highlight'>{roll}</span></h2>
  )
}

export default Roll