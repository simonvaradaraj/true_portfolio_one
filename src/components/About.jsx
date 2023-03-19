import React from 'react'

import { motion } from 'framer-motion'

import {fadeIn, textVariant } from '../utils/motion'
import { QueenCanvas, SkateCanvas, MusicCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant("", "", .2, 1)}>
        <p className="text-[16px] tracking-widest">INTRODUCTION</p>
        <h2 className="font-pp text-[40px]">About Me.</h2>
      </motion.div>

      <div className='flex flex-row gap-8'>
        <motion.p variants={fadeIn("", "", .2, 1)} 
            className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'>
          I'm an Honors Computer Science Major at Texas A&M University with experience developing in web frameworks like <span className='text-stars'>React</span>, <span className='text-stars'>Node.js</span>, and <span className='text-stars'>Three.js</span>. I also have experience with <span className='text-[#8091f1]'>Python</span> development and technologies such as OpenCV and Tensorflow. I'm a quick learner and always willing to put in 110% percent in order to solve whatever problems come my way. My hobbies include playing the piano, skateboarding, and being a mediocre chess player.
        </motion.p>
        <QueenCanvas/>
      </div>
      
      

      
{/*       
      <div className="flex flex-row gap-8">     
        
        <SkateCanvas/>
        <MusicCanvas/>
      </div> */}
    </>
  )
}

export default SectionWrapper(About, 'about')