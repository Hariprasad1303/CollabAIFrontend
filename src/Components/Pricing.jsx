import { faBolt, faCheck, faComment, faCrown, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Pricing = ({id}) => {
  return (
    <>
      <div className='flex flex-col max-w-full m-15 md:m-25' id={id}>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-center text-[#0F172A] font-extrabold text-4xl md:text-6xl mb-4'>Choose Your<span className='bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent'> Perfect Plan</span></h2>
            <p className='text-justify text-[#64748B]  font-medium text-lg px-4'>Start free and scale as you grow. All plans include our core features.</p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-6 mt-20'>
            <div className='w-full md:w-[25%]  border-gray-300 p-6 shadow-2xl rounded-lg'>
               <div>
                  <div className=' flex justify-center items-center w-14 h-14  bg-[#DFF5FF]  rounded-xl'><FontAwesomeIcon icon={faBolt} className='text-[#38BDF8] text-4xl font-bold'/></div>
                  <h3 className='font-bold text-[#0F172A] mt-4'>Free</h3>
                  <p className='text-justify text-[#64748B]  font-medium mt-2'>Perfect for individuals and small teams getting started</p>
               </div> 
               <hr className='border-gray-300 w-full mt-4'/>
               <div className='my-6'>
                  <h2 className='text-3xl md:text-5xl font-extrabold bg-[linear-gradient(180deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent'>$0<span className='text-[#64748B] text-lg font-medium mx-4'>forever</span></h2>
               </div>
               <hr className='border-gray-300 w-full mt-4'/>
               <div className='mt-8'>
                 <ul className='flex flex-col items-start'>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Up to 3 projects</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3 '/>5 team members</li> 
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Basic AI assistance</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>10GB storage</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Email support</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Basic analytics</li>
                 </ul> 
               </div>
               <div className='text-center'>
                 <button className='border px-4 py-2  text-[#0F172A] border-gray-300 mt-8 bg-[#f1eded] rounded font-bold text-xl w-[70%]'>Get Started</button> 
               </div> 
            </div>
            <div className='w-full md:w-[25%]  border-gray-300 p-6 shadow-2xl rounded-lg'>
               <div>
                  <div className=' flex justify-center items-center w-14 h-14 bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)]  rounded-xl'><FontAwesomeIcon icon={faCrown} className='text-white text-4xl font-bold'/></div>
                  <h3 className='font-bold text-[#0F172A] mt-4'>Premium</h3>
                  <p className='text-justify text-[#64748B]  font-medium mt-2'>For growing teams that need advanced feature</p>
               </div> 
               <hr className='border-gray-300 w-full mt-4'/>
               <div className='my-6'>
                  <h2 className='text-3xl md:text-5xl font-extrabold bg-[linear-gradient(180deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent'>$29<span className='text-[#64748B] text-lg font-medium mx-4'>forever</span></h2>
               </div>
               <hr className='border-gray-300 w-full mt-4'/>
               <div className='mt-8'>
                 <ul className='flex-flex-col items-start'>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Unlimited projects</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3 '/>Unlimited team member</li> 
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Advanced AI assistance</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>100GB storage</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Priority support</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Advanced analytics</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Custom integrations</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Team collaboration tools</li>
                 </ul> 
               </div>
               <div className='text-center'>
                 <button className='border px-4 py-2 bg-[linear-gradient(180deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white border-gray-300 mt-8  rounded font-bold text-xl w-[70%] '>Get Started</button> 
               </div> 
            </div>
            <div className='w-full md:w-[25%]  border-gray-300 p-6 shadow-2xl rounded-lg'>
               <div>
                  <div className=' flex justify-center items-center w-14 h-14  bg-[#FFE4F1] rounded-xl'><FontAwesomeIcon icon={faRocket} className='text-[#EC4899]  text-4xl font-bold'/></div>
                  <h3 className='font-bold text-[#0F172A] mt-4'>EnterPrise</h3>
                  <p className='text-justify text-[#64748B]  font-medium mt-2'>For large organizations with specific needs</p>
               </div> 
               <hr className='border-gray-300 w-full mt-4'/>
               <div className='my-6'>
                  <h2 className='text-3xl md:text-5xl font-extrabold bg-[linear-gradient(180deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent'>Custom<span className='text-[#64748B] text-lg font-medium mx-4'>forever</span></h2>
               </div>
               <hr className='border-gray-300 w-full mt-4'/>
               <div className='mt-8'>
                 <ul>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Everything in Pro</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3 '/>Unlimited storage</li> 
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Dedicated account manager</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>24/7 phone support</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Custom AI training</li>
                    <li className='mb-2 text-[#64748B] flex items-center'><FontAwesomeIcon icon={faCheck} className='bg-[#F2E1FF] text-[#A855F7] font-extrabold p-1.5 rounded-4xl me-3'/>Advanced security</li>
                 </ul> 
               </div>
               <div className='text-center'>
                 <button className='border px-4 py-2  text-[#0F172A] border-gray-300 mt-8 bg-[#f1eded] rounded font-bold text-xl w-[70%]'>Get Started</button> 
               </div> 
            </div>            
        </div>
      </div> 
    </>
  )
}

export default Pricing
