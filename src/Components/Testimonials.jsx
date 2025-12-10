import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Testimonials = ({id}) => {
  return (
    <>
      <div className='mt-30 min-h-screen' id={id}>
           <div className='flex flex-col items-center'>
              <h2 className='text-4xl md:text-6xl sm:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] mb-4 text-center px-4'>Loved by Teams Worldwide</h2>   
              <p className='text-[#64748B] font-medium text-lg px-6 md:px-12 max-w-4xl text-justify'>Join thousands of teams who have transformed their workflow with CollabAI</p>          
           </div>
           <div className='grid md:grid-cols-3 gap-8 mt-35 mb-15'>
              <div className='w-[80%]  mx-auto  border border-gray-200 shadow-2xl rounded-lg'>
                <div className="flex gap-y-4 my-5 px-6">
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl'/>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl'/>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl' />
                </div>
                <div className='px-8'>
                    <p className='text-justify text-[#64748B] font-bold leading-7'>"CollabAI has transformed how our team collaborates. The AI-powered insights are game-changing, and the intuitive interface makes project management a breeze."</p>
                </div>
                <hr className='border mx-auto w-[90%] my-5 border-gray-300'/>
                <div className='flex flex-col sm:flex-row md:flex-row justify-between sm:justify-evenly md:justify-evenly items-center mb-6 gap-8 text-center'>
                    <div>
                        <img src='https://randomuser.me/api/portraits/women/44.jpg' className='border-2 border-purple-500 p-2  h-32 w-32'  style={{borderRadius:'50%'}}
                        />
                    </div>
                    <div>
                        <h4 className='text-[#0F172A] font-bold mb-1 text-xl px-3'>Sarah Johnson</h4>
                        <p className='text-[#64748B] font-semibold text-lg px-3'>Product Manager at TechCorp</p>
                    </div>
                </div>
              </div>  
              <div className='w-[80%]  mx-auto  border border-gray-200 shadow-2xl rounded-lg'>
                <div className="flex gap-y-4 my-5 px-6">
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl'/>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl'/>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl' />
                </div>
                <div className='px-8'>
                    <p className='text-justify text-[#64748B] font-bold leading-7 '>"We've tried countless project management tools, but CollabAI stands out. The seamless integration and real-time collaboration features have boosted our productivity by 40%."</p>
                </div>
                <hr className='border mx-auto w-[90%] my-5 border-gray-300'/>
                <div className='flex flex-col sm:flex-row md:flex-row justify-between sm:justify-evenly md:justify-evenly items-center mb-6 gap-8 text-center'>
                    <div>
                        <img src='https://randomuser.me/api/portraits/men/45.jpg' className='border-2 border-purple-500 p-2 h-32 w-32 '  style={{borderRadius:'50%'}}
                        />
                    </div>
                    <div>
                        <h4 className='text-[#0F172A] font-bold mb-1 text-xl px-3'>Michael Chen</h4>
                        <p className='text-[#64748B] font-semibold text-lg px-3'>CEO at StartupHub</p>
                    </div>
                </div>
              </div> 
              <div className='w-[80%]  mx-auto  border border-gray-200 shadow-2xl rounded-lg'>
                <div className="flex gap-y-4 my-5 px-6">
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl'/>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl'/>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-xl' />
                </div>
                <div className='px-8'>
                    <p className='text-justify text-[#64748B] font-bold leading-7'>"The AI assistant is like having an extra team member. It helps us stay organized, prioritize tasks, and never miss a deadline. Absolutely fantastic!"</p>
                </div>
                <hr className='border mx-auto w-[90%] my-5 border-gray-300'/>
                <div className='flex flex-col sm:flex-row md:flex-row justify-between sm:justify-evenly md:justify-evenly items-center mb-6 gap-8 text-center'>
                    <div>
                        <img src='https://randomuser.me/api/portraits/women/65.jpg' className='border-2 border-purple-500  h-32 w-32 p-2 md:w-24 md:h-24'  style={{borderRadius:'50%'}}
                        />
                    </div>
                    <div>
                        <h4 className='text-[#0F172A] font-bold mb-1 text-xl px-3'>Emily Rodriguez</h4>
                        <p className='text-[#64748B] font-semibold text-lg px-3'>Design Lead at Creative Studio</p>
                    </div>
                </div>
              </div> 
           </div> 
           <div className='grid  md:grid-cols-4 sm:grid-cols-2 text-center mt-20 gap-8'>
              <div>
                <h4 className='text-4xl md:text-5xl font-extrabold mb-1 text-[#B14ACF]'>50K+</h4>
                <p className='text-[#64748B] text-lg font-semibold'>Active users</p>
              </div>
              <div>
                <h4 className='text-4xl md:text-5xl font-extrabold mb-1 text-[#3A8DFF]'>98%</h4>
                <p className='text-[#64748B] text-lg font-semibold'>Satisfaction Rate</p>
              </div>
              <div>
                <h4 className='text-4xl md:text-5xl font-extrabold mb-1 text-[#FF7A59]'>10M+</h4>
                <p className='text-[#64748B] text-lg font-semibold'>Tasks Completed</p>
              </div>
              <div>
                <h4 className='text-4xl md:text-5xl font-extrabold mb-1 text-[#D34FF7]'>24/7</h4>
                <p className='text-[#64748B] text-lg font-semibold'>AI Support</p>
              </div>  
           </div>
      </div>
    </>
  )
}

export default Testimonials
