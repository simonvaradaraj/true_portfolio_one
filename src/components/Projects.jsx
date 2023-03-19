import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { projects } from '../constants'
import Tilt from 'react-tilt'

const ProjectCard = ({index, name, description, tag, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * .5, .75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-card p-5 sm:w-[360px] w-full border border-solid border-white'>
          
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant("", "", .2, 1)}>
        <p className="text-[18px]">எனது சிறந்த திட்டங்கள்</p>
        <h2 className="font-pp text-[40px]">My Best Projects.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "work")