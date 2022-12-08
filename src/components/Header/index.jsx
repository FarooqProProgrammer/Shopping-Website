import React, { useState } from 'react'
import { Input } from 'antd';
import { Button, Space } from 'antd';
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import './styles/Home.css'

const Header = () => {
    const [navbar,setNavbar] = useState(false);

    const show =()=>{
        setNavbar(true);
    }
  return (
    <>
    <div className="w-full h-[60px]  bg-[#2874f0] flex justify-around items-center">
            <p className='text-white lg:text-2xl sm:text-[13px] font-black cursor-pointer'>Shopping Where You Want</p>
            <Input placeholder="Search for product"  className='input_text w-[400px] h-[40px]'/>
            <Space wrap>
            <Button type="primary" className='btn-pc w-[100px] h-[40px] bg-white text-[#2874f0]'>Login</Button>
            </Space>
            <a href="#" className='text-white link-pc cursor-pointer'>Become a Seller </a>
            <a href="#" className='text-white link-pc cursor-pointer'>More</a>
            <a href="#" className='text-white link-pc cursor-pointer'>Add to cart</a>
            <FaBars onClick={show} className='text-3xl text-white cursor-pointer lg:hidden md:block sm:block'/>
    </div>

{  navbar &&  <div className="mobile_bar w-[100%] h-[390px] lg:hidden bg-[#2874f0] relative float-right flex flex-col justify-around items-center">
        <RxCross2 onClick={()=>setNavbar(false)} className='absolute text-3xl text-white top-0 left-0 cursor-pointer'/>

    <Space wrap>
            <Button type="primary" className=' w-[100px] h-[40px] bg-white text-[#2874f0]'>Login</Button>
    </Space>
            <a href="#" className='text-white  cursor-pointer'>Become a Seller </a>
            <a href="#" className='text-white  cursor-pointer'>More</a>
            <a href="#" className='text-white  cursor-pointer'>Add to cart</a>
            <Input placeholder="Search for product"  className=' w-[200px] h-[40px]'/>

    </div>}
    </>
  )
}

export default Header