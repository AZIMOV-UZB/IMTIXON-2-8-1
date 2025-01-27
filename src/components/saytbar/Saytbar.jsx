import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";


const Saytbar = () => {
  return (
    <div className=' bg-white mb-3 saytbar'>

        <div className='w-[220px] saytbar '>
            <div className='mt-5 bg-green-500 text-white flex py-2 items-center gap-1 m-1 rounded-lg justify-center'>
            <MdOutlineShoppingCart  className='text-[20px]'/>
                <p className='text-[18px]'>Maxsus buyurtma</p>
            </div>

            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Smartfonlar</p>
              <SlArrowRight  className='text-[13px]'/>
              </div>

            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Quloqchinlar</p>
              <SlArrowRight  className='text-[13px]'/>
              </div>
            
            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Xotira kartalari</p>
              <SlArrowRight  className='text-[13px]'/>
              </div>
            
            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Smartfon aksesuarlari</p>
              <SlArrowRight  className='text-[13px]'/>
              </div>
            
            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Gadjetlar</p>
              <SlArrowRight  className='text-[13px]'/>
              </div>
            
            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Quvvatlovchi uskunalar</p>
              <SlArrowRight  className='text-[13px]'/>
              </div>

            <div className='flex justify-between px-4 my-6 items-center'>
              <p className='font-[400]'>Kabellar</p>
            <SlArrowRight  className='text-[13px]'/>
            </div>

            

                    </div>
        
    </div>
  )
}

export default Saytbar