import React from 'react'

import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className='sm:px-16 px-6 '>
            <h1 className={`font-pp text-[64px]`}>Hello Everybody</h1>
            <p className={`block w-3/5 mt-2 text-white-100 leading-loose text-[18px]`}>
            My name is Simon Varadaraj, and I’m a full-stack web and python developer. If there’s one thing about me you should know, it’s that I shoot for the <span className='text-stars'>stars</span>.
            </p>
        </div>
      </div>

      <motion.div className="absolute opacity-0 xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 4
        }}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2">
            <motion.div 
            animate={{y: [0, 24, 0]}} 
            transition={{
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: 'loop'}}
            className="w-3 h-3 rounded-full bg-white-100 mb-1"
            />
          </div>
        </a>
      </motion.div>
    </div>
  )
}

export default Hero