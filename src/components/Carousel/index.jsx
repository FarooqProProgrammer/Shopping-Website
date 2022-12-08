import React from 'react'
import {AiFillForward} from 'react-icons/ai'
import './index.css'
export default function index() {
  return (
    <div className='w-100 h-[300px] border-2 border-black'>
        
        <div className="carousel w-full h-full border-2 border-black relative">
            
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1670443987403-2020751a7120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
            <AiFillForward className='absolute text-5xl text-white top-0 '/>
        </div>    

    </div>
  )
}
