import { BrowserRouter } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {Navbar, Hero, StarsCanvas, About, Techno, Projects, Contact} from "./components"

function App() {

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // })
  
  // console.log(mousePosition)

  // useEffect(() => {

  //   const handleMouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener('mousemove', handleMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove)
  //   }
  // }, [])

  // const variants = {
  //   default: {
  //     x: mousePosition.x,
  //     y: mousePosition.y
  //   }
  // }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <Navbar/>
          <Hero/>
          <StarsCanvas />
        </div>
        <About/>
        <Techno />
        {/* <Works/> */}
        <Projects/>
        <Contact/>
      </div>

      {/* <motion.div 
      className="bg-white-100 h-[32px] w-[32px] rounded-full fixed top-0 left-0"
      variants={variants}
      animate="default"></motion.div> */}
      
    </BrowserRouter>
  )
}

export default App
