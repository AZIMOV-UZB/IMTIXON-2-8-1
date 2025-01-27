import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";

const Saytbar = () => {
  return (
    <div className=' bg-white mb-3 saytbar'>

        <div className='w-[220px] saytbar '>
            <div className='mt-5 bg-green-500 text-white flex py-2 items-center gap-1 m-1 rounded-lg justify-center'>
            <MdOutlineShoppingCart  className='text-[20px]'/>
                <p className='text-[18px]'>Maxsus buyurtma</p>
            </div>
        </div>
        
    </div>
  )
}

export default Saytbar