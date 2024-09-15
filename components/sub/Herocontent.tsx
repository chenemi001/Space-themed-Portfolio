'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Herocontent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className='welcome-box py-[8px] px-[4px] border border-[#7042f8] opacity-[0.15]  rounded-full w-[250px] 
       shadow-md shadow-slate-900 '>
          <div className='flex items-center'>
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='welcome-text text-[13px] text-white'>Fullstack Developer Portfolio</h1>
          </div>
        </motion.div>
        <motion.div
         variants={slideInFromLeft(0.5)}
         className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
            <span>
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500'> the best </span>
            project experience
            </span>
           
        </motion.div>
        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'>
       I am Victoria a Full Stack Software Engineer skilled in React, Tailwind CSS, and TypeScript. I build both dynamic UIs and robust back-end systems.
         I excel in delivering high-performance, innovative software.
          Coding is my passion.
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
            Learn more!
        </motion.a>
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className='h-full w-full flex justify-center items-center'>
        
        <img
        src='/mainIconsdark.svg'
        alt='work icons'
        height={650}
        width={650}/>

      </motion.div>
    </motion.div>
  )
}

export default Herocontent
