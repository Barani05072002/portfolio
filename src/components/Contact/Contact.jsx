import React from 'react'
import './Contact.css'
import Tag from '../Tag/Tag'
import { MdArrowOutward } from "react-icons/md";

function Contact() {

  const intrests = ["web development","cycling","front-end development","back-end development"
    ,"software developing","new business","startups","freelanzing","juices"
  ]


  return (
    <div className="contact">
      <div className="contact container">
        <div className="connect">Let Connect</div>
        <div className="interest">
          <h1 className="title">I'm always interest about</h1>
            {intrests.map((val)=><Tag data={val} className="it"/>)}  
        </div>
      </div>
      <div className="container">
          <h1 className="title">Are you minding project?<span className='social'>connect<MdArrowOutward className='arr'/></span></h1>
      </div>
    </div>
  )
}

export default Contact