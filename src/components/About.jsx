import React from 'react'

import { motion } from 'framer-motion'

import {fadeIn, textVariant } from '../utils/motion'
import { QueenCanvas, SkateCanvas, MusicCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[24px]">என்னை பற்றி</p>
        <h2 className="font-pp text-[44px]">About Me.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", .1, 1)} 
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm an Honors Computer Science Major at Texas A&M University with experience developing in web frameworks like React, Node.js, and Three.js. I also have experience with Python development and technologies such as OpenCV and Tensorflow. I'm a quick learner and always willing to put in 110% percent in order to solve whatever problems come my way.
      </motion.p>

      <QueenCanvas/>
      <SkateCanvas/>
      <MusicCanvas/>
    </>
  )
}

export default SectionWrapper(About, 'about')