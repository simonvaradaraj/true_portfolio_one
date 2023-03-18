import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='sm:px-16 px-6 w-full flex-items-center py-5 fixed top-0 z-20 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
              onClick={() => {
                setActive("")
                window.scrollTo(0,0)
              }}>
              <p className='text-white sm:text-[24px] text-[18px] cursor-pointer font-pp'>Simon Varadaraj</p>
        </Link>
        
        {/* FOR LARGER DEVICES */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-white" : "text-grayed"} hover:text-white text-[14px]  font-medium cursor-pointer`}
              onClick = {() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}  
        </ul>
      

        {/* FOR SMALLER DEVICES */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}/>
            <div className={`${!toggle ? 'hidden' : 'flex'} p-8 bg-white-100 border-black border-solid border-2 absolute top-20 right-0 mx-4 min-w[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-center items-center flex-col gap-5'>
                {navLinks.map((link) => (
                  <li key={link.id}
                    className={`${active === link.title ? "text-grayed" : "text-black"} hover:text-white text-[14px]  font-medium cursor-pointer`}
                    onClick = {() => {
                      setToggle(!toggle)
                      setActive(link.title)
                      }}>
                      <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))} 
              </ul>
            </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar