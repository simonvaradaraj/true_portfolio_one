import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { jobs } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkCard = ({company, role, date, description, logo, location}) => {
    return (
        <>
            <VerticalTimelineElement
                contentStyle={
                    { background: '#252525', 
                    color: '#fff',
                    fontFamily: 'Public Sans', 
                    border: '1px solid white', 
                    borderRadius: 0
                }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date={date}
                iconStyle={{ 
                    background: '#252525', 
                    color: '#fff', display: 
                    'flex', justifyContent: 
                    'center', 
                    alignItems: "center"
                }}
                icon={<img src={logo} alt="jobs" width="30" height="30"></img>}> 
                <h3 className='font-pp text-white-100 font-bold text-[32px]'>{company}</h3>
                <h4 className="font-pp text-grayed">{role}</h4>
                <ul className='mt-1 list-disc ml-7'>
                    {description.map((bullet, index) => (
                        <li className='mt-1 mb-1' key={index}><p>{bullet.bullet}</p></li>
                    ))}
                </ul>
            </VerticalTimelineElement>
        </>
    )
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant("", "", .2, 1)}>
                <p className="sm:text-[16px] text-[14px] tracking-widest">IMPACT</p>
                <h2 className="font-pp text-[40px]">My Experience.</h2>
            </motion.div>
            <VerticalTimeline className='mt-10'>
                {jobs.map((job, index) => (
                <WorkCard key={`project-${index}`} index={index} {...job}/>
                ))}
            </VerticalTimeline>
        </>
    )
}

export default SectionWrapper(Works, "work")