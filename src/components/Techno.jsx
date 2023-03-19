import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const Techno = () => {
  return (
    <div className="mt-[-100px] flex w-full flex-col items-center justify-center">
      <motion.p
        variants={textVariant("", "", .4, 1)}
        className="text-[16px] text-white-100 mb-10"

      >Here's the some of the technologies I am proficient in</motion.p>
      <motion.div 
      variants={fadeIn("", "", .4, 1)}
      className="flex flex-row flex-wrap justify-center w-4/6 sm:gap-[4rem] gap-[3rem]">
        {technologies.map((technology, index) => (
          <motion.div 
          animate={{y: [0, 15, 0]}} 
          transition={{
              duration: 4.5, 
              delay: Math.random() * index,
              repeat: Infinity, 
              repeatType: 'loop'}}
          className="sm:w-[4.4rem] w-[3.4rem] sm:h-[4.4rem] h-[3.4rem]" key={technology.name}>
            <img src={technology.icon} alt={technology.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Techno, 'techno')