import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'

import { textVariant, fadeIn } from '../utils/motion'
import { MusicCanvas, QueenCanvas, SkateCanvas } from './canvas'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-[18px] mb-0'>என்னை பற்றி</p>
        <h2 className="text-[48px] font-pp ">A Bit About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", .4, 1)} 
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm an Honors Computer Science Major at Texas A&M University with experience developing in web frameworks like React, Node.js, and Three.js. I also have experience with Python development and technologies such as OpenCV and Tensorflow. I'm a quick learner and always willing to put in 110% percent in order to solve whatever problems come my way. My hobbies include playing the piano, skateboarding, and being a mediocre <a href="https://www.chess.com/member/simahh" className='text-inherit hover:text-grayed'>chess player.</a>
      </motion.p>

      <QueenCanvas/>
      <MusicCanvas/>
      <SkateCanvas/>
    </>
  )
}

export default SectionWrapper(About, 'about')