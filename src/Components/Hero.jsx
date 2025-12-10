import React from 'react'
import Heroimage from '../assets/Heroimagefigma 1.svg'
import { faArrowRightArrowLeft, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <div className='grid grid-cols-1  h-screen mt-20 gap-10'>
      <div className='my-auto'>
        <h1 className='capitalize text-[#0F172A] font-extrabold text-center text-4xl md:text-7xl px-4'>empower your Team with <span className='bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent'>AI collaboration</span></h1>
        <p className='text-justify text-md md:text-xl text-[#64748B] px-4 mt-4 font-medium max-w-3xl mx-auto'>CollabAI revolutionizes project management with AI-driven insights, real-time collaboration, and predictive analytics. Work smarter, not harder.</p> 
        <div className='flex flex-col md:flex-row justify-center items-center mt-15 gap-6'>
          <button className='bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white fon t-bold px-5 py-3 md:px-8 md:py-4 rounded-lg mx-4'>Get started Free<FontAwesomeIcon icon={faUserPlus} className='ml-2' /></button>
          <button className='border border-gray-300 font-bold px-5 py-3 md:px-8 md:py-4 rounded-lg mx-4'>See Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
Hero