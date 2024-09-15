'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

export const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center' >
         <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className='welcome-box py-[8px] px-[4px] border border-[#7042f8] opacity-[0.15]  rounded-full w-[250px] 
       shadow-md shadow-slate-900 '>
          <div className='flex items-center'>
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='welcome-text text-[13px] text-white'>Think better with Next.js 13</h1>
          </div>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] '>
            Making apps with modern technology
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
            Never miss a task, deadline or idea.
        </motion.div>

    </div>
  )
}

export default SkillText