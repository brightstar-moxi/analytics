
"use client"
import React from 'react'
import Image from "next/image";
import Image1 from '/public/pic1.png'






const First = () => {
   
  return (
   
    <section className='text-white'id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='mt-4 md:mt-0  flex flex-col h-full'>
            <span className='text-7xl font-extrabold text-white mb-4'>Analyze Student Feedback</span>
            <p className='text-2xl'>Gain valuable insights from Student reviews across various faculties. 
               </p>
           <p className='text-2xl'> Students can conveniently share their feedback through the client interface</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white border-white py-2 px-4 rounded w-60 mt-8">Get Started</button>
                <div>*****</div>
        </div>
         <Image 
        src={Image1}
        alt="about image"
        width={600}
        height={700}
        />
        
        </div></section>
  )
}

export default First