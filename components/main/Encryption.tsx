'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'

export const Encryption = () => {
  return (
    <div className='-mt-32'>
    <div className='flex flex-col relative items-center justify-center min-h-screen w-full h-full'>
      <div className='absolute top-0 z-[5]'>
        <motion.div
          variants={slideInFromTop}
          className='text-[40px] font-medium text-center text-gray-200'
        >
          Performance
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500'>{''}
            &{''}
          </span>
          Security
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center absolute z-[20]'>
        <div className='flex flex-col items-center group cursor-pointer'>
          <img
            src='/LockTop.png'
            alt='Lock Top'
            width={50}
            height={50}
            className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
          />
          <img
            src='/LockMain.png'
            alt='Lock Main'
            width={70}
            height={70}
            className='z-10'
          />
        </div>

       
        <div className='welcome-box px-4 py-2 z-20 border border-[#7052c9] my-4 rounded-lg bg-[#1f1f1f] opacity-90 shadow-md'>
          <h1 className='welcome-text text-[14px] font-semibold text-white'>
            Encryption
          </h1>
        </div>
      </div>

      <div className='w-full flex items-start justify-center absolute'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-auto'
          src='/encryption.webm'
        />
      </div>

     
      <div className='w-full flex justify-center absolute bottom-0'>
        <div className='cursive text-lg font-medium text-gray-300 pb-6'>
          Secure your data with end-to-end encryption
        </div>
      </div>
    </div>
    </div>
  )
}

export default Encryption
