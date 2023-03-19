import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant("", "", .2, 1)}>
        <p className="text-[18px]">திட்டம்</p>
        <h2 className="font-pp text-[40px]">My Projects</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Projects, "works")