import React, {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {HomeCanvas} from './canvas'
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
    "service_mie7abd", 
    "template_hijh9t7",
    {
      from_name: form.name,
      to_name: "Simon",
      from_email: form.email,
      to_email: 's.varadaraj03@gmail.com',
      message: form.message
    },
    "ZaCJA1AGTKpoqW9Ot"
    )
    .then(() => {
      setLoading(false)
      alert("Thanks");

      setForm(
        {
          name: "",
          email: "",
          message: ""
        }
      )
    }, (error) => {
      setLoading(false)
      console.log(error)

      alert("Something went wrong.");
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-20 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} 
      className="border border-stars flex-1 bg-car p-8">
        <p className="text-[18px]">தொடர்பு கொள்</p>
        <h2 className="font-pp text-[40px]">Contact Me.</h2>

        <form ref={formRef} onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8">
          <label className='flex flex-col'>
            <span className='text-white mb-4'>NAME</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="bg-card py-4 px-6 placeholder:text-grayed text-white outlined-none border-none font-medium" placeholder="What's your name?"/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>EMAIL</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="bg-card py-4 px-6 placeholder:text-grayed text-white outlined-none border-none font-medium" placeholder="What's your email?"/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>MESSAGE</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} className="bg-card py-4 px-6 placeholder:text-grayed text-white outlined-none border-none font-medium" placeholder="What do you want to say?"/>
          </label>

          <button type='submit' className='bg-card py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary hover:bg-white-100 hover:text-primary'>
            {loading ? 'SENDING...' : 'SEND'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <HomeCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")