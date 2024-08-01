import React, { useContext, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import MenuContext from '../../context/global';
import Roll from './Roll/Roll';
import { LuArrowRight } from "react-icons/lu";

import './Home.css'


const Home = () => {

  const context = useContext(MenuContext);
  const rolls = ['software developer','web developer','back-end developer','front-end developer','webflow-developer','normal-person']
  let [position,setPosition] = useState(0)

  const handleMenu = ()=>{
    console.log(context.menu)
    context.setMenu({
      home:{display:'none'},
      nav:{display:'block'}
    })
  }

  setTimeout(() => {

    setPosition((position%(rolls.length-1))+1)

  }, 3000);

  return (
    <div className='home' style={context.menu.home}>
        <div className="hero-name">
            <p className='available'><div className='online'></div> AVAILABLE FOR WORK <span class="dir"><LuArrowRight/></span></p>
            <h1>Hey,I'm <span className='highlight'>Barani dharan </span>but you <br/>can call me <span className='highlight'>Barani</span>!</h1>
            <Roll roll={rolls[position]}/>
            <div className="menu" onClick={handleMenu}>
              <MdArrowOutward/>
            </div>
        </div>
    </div>
  )
}

export default Home