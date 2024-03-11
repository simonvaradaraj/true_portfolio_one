import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { jobs } from '../constants'

// const WorkCard = ({company, role, description, logo}) => {
//     return (

//     )
// }

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant("", "", .2, 1)}>
                <p className="sm:text-[16px] text-[14px] tracking-widest">SHOWCASE</p>
                <h2 className="font-pp text-[40px]">My Best Projects.</h2>
            </motion.div>
        </>
    )
}

export default SectionWrapper(Works, "work")