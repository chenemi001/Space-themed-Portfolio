import { Socials } from '@/Constants';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='w-full h-[52px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto p-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <img
            src='/NemiLogo.svg'
            alt='logo'
            height={25}
            width={25}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className='font-bold ml-[10px] hidden md:block text-[#3E4AB8]'>
            NemiTech
          </span>
        </a>
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between border border-[#7042f861] w-full h-auto bg-[#0300154e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href='#about-me' className='cursor-pointer'>About me</a>
            <a href='#about-me' className='cursor-pointer'>Skills</a>
            <a href='#about-me' className='cursor-pointer'>Projects</a>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          {Socials && Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}  
            />
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
