import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { projects } from '../constants'
import { github } from '../assets'
import Tilt from 'react-tilt'

const ProjectCard = ({index, name, description, tag, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * .5, .75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-card p-5 sm:w-[360px] w-full border border-solid border-white h'>
          <img src={image} alt={name} className="w-full sm:h-[170px] h-100 sm:object-fit object-cover" />
      
          <div className="mt-5">
            <h3 className='font-pp text-white-100 font-bold text-[32px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          
          <p onClick = {() => window.open(source_code_link, "_blank")} className="bg-white-100 border border-black mt-4 w-20 h-8 flex justify-center items-center cursor-pointer text-[15px] text-primary hover:border-white-100 hover:text-white-100 hover:bg-primary">
              GITHUB
          </p>


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

      <div className='mt-10 flex flex-wrap gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "work")