import React from 'react'
import Work from './Work'
import img from '../../assets/img.jpg'

function Works() {
  return (
    <>
      <div className="container">
      <h1 className="title">Works</h1>
      <hr className='load'/>
      <Work 
        projectName={"Memory Palace"}
        projectType={"The Game"}
        languages={["HTML","CSS","JAVASCRIPT"]}
        image={img}
        />
         <Work 
        projectName={"Memory Palace"}
        projectType={"The Game"}
        languages={["HTML","CSS","JAVASCRIPT"]}
        image={img}
        />
         <Work 
        projectName={"Memory Palace"}
        projectType={"The Game"}
        languages={["HTML","CSS","JAVASCRIPT","PYTHON"]}
        image={img}
        />
      </div>
    </>
  )
}

export default Works