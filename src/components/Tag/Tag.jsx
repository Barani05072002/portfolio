import React from 'react'
import './Tag.css'

function Tag({data}) {
  return (
    <div className="scroll-container">
        <h1 className="scroll-text">{data}</h1>
    </div>
  )
}

export default Tag