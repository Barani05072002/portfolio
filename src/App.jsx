import React, { useState } from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import MenuContext from './context/global';
import './App.css'

function App() {

  const [menu,setMenu] = useState({
    home:{display:'block'},
    nav:{display:'none'}
  });

  return (
  <MenuContext.Provider value={{menu,setMenu}}>
     <Nav/>
     <Home/>
     <About/>
     <Works/>
     <Contact/>
  </MenuContext.Provider>
  )
}

export default App