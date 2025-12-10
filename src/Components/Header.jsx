import { faArrowRightToBracket, faBars, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const scrollToSection=(id)=>{
    const section=document.getElementById(id);
    if(section){   
    section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
     <header className='flex justify-between items-center h-20 bg-[#FCFCFD] fixed top-0 left-0 w-full z-50 shadow-md'>
        {/* heading */}
        <div>
          <h1 className='font-bold bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)]
 bg-clip-text text-transparent text-3xl mx-6'>CollabAI</h1>
        </div>
        {/* navlinks */}
        <nav className='hidden md:flex space-x-10'>
          <ul className='flex'>
            <li className='mx-10'><a href="#" onClick={(e)=>{e.preventDefault();scrollToSection("home")}}  className='text-[#64748B] text-lg font-medium hover:text-[#0F172A] transition-colors duration-300'>Home</a></li>
            <li className='mx-10'><a href="#" onClick={(e)=>{e.preventDefault();scrollToSection("feature")}} className='text-[#64748B] text-lg font-medium hover:text-[#0F172A] transition-colors duration-300'>Features</a></li>
            <li className='mx-10'><a href="#" onClick={(e)=>{e.preventDefault();scrollToSection("testimonials")}} className='text-[#64748B] text-lg font-medium hover:text-[#0F172A] transition-colors duration-300'>Testimonials</a></li>
            <li className='mx-10'><a href="#" onClick={(e)=>{e.preventDefault();scrollToSection("contact")}} className='text-[#64748B] text-lg font-medium hover:text-[#0F172A] transition-colors duration-300'>Pricing</a></li>
            <li className='mx-10'><a href="#" onClick={(e)=>{e.preventDefault();scrollToSection("pricing")}} className='text-[#64748B] text-lg font-medium hover:text-[#0F172A] transition-colors duration-300'>Contact</a></li>
          </ul>
        </nav>
       {/* sign in and sign up buttons */}
        <div className='hidden  md:flex space-x-4'>
          <Link to={'/login'}><button className='mx-8 bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] font-medium rounded-md text-white px-3 py-2 active:opacity-80  transition duration-300'>Sign In<FontAwesomeIcon icon={faArrowRightToBracket} className='ml-2' /></button></Link>
          <Link to={'/signup'}><button className='mx-8 bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] font-medium text-white px-3 py-2 rounded-md active:opacity-80  transition duration-300'>Get Started<FontAwesomeIcon icon={faUserPlus} className='ml-2' /></button></Link>
        </div>

        {/* Mobile menu icon */}
        <button onClick={()=> setMenuOpen(!menuOpen)} className='block md:hidden text-2xl text-[#0F172A]'>
          <FontAwesomeIcon icon={faBars} />
        </button>    
         
        {/*Drop down*/}
        {
          menuOpen &&(
            <div className='md:hidden absolute top-20 right-0 bg-[#FCFCFD] shadow-md p-8 flex flex-col items-center space-y-5 z-40'>
              <ul className='flex flex-col items-center space-y-4'>
                <li><a href='#' onClick={(e) =>{e.preventDefault();scrollToSection("home");setMenuOpen(false)}}  className="text-lg text-[#64748B] hover:text-[#0F172A] transition-colors duration-300">Home</a></li>
                <li><a href='#' onClick={(e) =>{e.preventDefault();scrollToSection("feature");setMenuOpen(false)}} className="text-lg text-[#64748B] hover:text-[#0F172A] transition-colors duration-300">Feature</a></li>
                <li><a href='#' onClick={(e) =>{e.preventDefault();scrollToSection("testimonials");setMenuOpen(false)}} className="text-lg text-[#64748B] hover:text-[#0F172A] transition-colors duration-300">Testimonials</a></li>
                <li><a href='#' onClick={(e) =>{e.preventDefault();scrollToSection("contact");setMenuOpen(false)}} className="text-lg text-[#64748B] hover:text-[#0F172A] transition-colors duration-300">Pricing</a></li>
                <li><a href='#' onClick={(e) =>{e.preventDefault();scrollToSection("pricing");setMenuOpen(false)}} className="text-lg text-[#64748B] hover:text-[#0F172A] transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          ) 
        }

     </header> 
     <hr className='border-[#E2E8F0]'/>
    </>
  )
}

export default Header