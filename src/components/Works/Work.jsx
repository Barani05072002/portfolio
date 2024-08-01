import React from 'react'
import img from '../../assets/18280.jpg'
import Card from '../Card/Card'
import Tag from '../Tag/Tag'
import './Works.css'

function Work({projectName,projectType,languages,image}) {
  return (
            <div className="container work">
                <Card path={image}/>
                <div className="content">
                    <h1 className='pro-name'>{projectName}</h1>
                    <h1 className='pro-type'>{projectType}</h1>
                    <div className='tags'>
                        {languages.map((val)=><Tag data={val}/>)}
                    </div>
                </div>
            </div>
    )
}

export default Work