import React from 'react'
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import './Card.css';



function Card({path}) {
  return (
    <div className="card">
        <div className="frame">
            <div className="image"><img src={path} alt="image"/></div>
            <div className="more-detaile">MORE ABOUT <TbPlayerTrackNextFilled/></div>
        </div>
    </div>
  )
}

export default Card