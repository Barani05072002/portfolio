import React, { useContext} from 'react';
import './Nav.css';
import { FiArrowDownLeft } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import MenuContext from '../../context/global';



function Nav() {

  const context = useContext(MenuContext)

  const handleClose = ()=>{
    context.setMenu({
      home:{display:'block'},
      nav:{display:'none'}
    })
  }

  return (
      <div className='nav' style={context.menu.nav}>
        <div className="close" onClick={handleClose}><FiArrowDownLeft /></div>
        <ul>
            <li><a href="">project   </a><MdArrowOutward className='arrow'/></li>
            <li><a href="">about   </a><MdArrowOutward className='arrow'/></li>
            <li><a href="">contact   </a><MdArrowOutward className='arrow'/></li>
            <li><a href="">linkedin  </a><MdArrowOutward className='arrow'/></li>
        </ul>
    </div>
  
  )
}

export default Nav