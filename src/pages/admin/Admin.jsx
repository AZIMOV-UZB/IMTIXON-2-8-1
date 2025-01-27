import React, { memo } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  window.scrollTo(0, 0);

  return (
    <div className="Admin">
      <div className="flex pt-10 ">

        <div className='w-80  flex flex-col  gap-5 h-[300px] bg-white rounded-lg pt-2 px-2  '>
          <p className="text-[20px] font-[800]  font-serif pl-1">Akkaunt</p>
          <Link to={"/cartProducts"}>
            <p className='text-[20px]  hover:text-green-500'>
              Sizning buyurtmalaringiz
            </p>
          </Link>


          <Link to={"qurulmalaringiz"}>
            <p className='text-[20px]  hover:text-green-500'>
              Sizning qurilmalaringiz
            </p>
          </Link>


          <Link to={"yordam"}>

          <p className='text-[20px]  hover:text-green-500'>
            Yordam kerakmi ?
          </p>
          </Link>


          <hr />

          <Link to={"/"}>
            <p className='text-red-600 text-[20px]'>
              Chiqish
            </p>
          </Link>


        </div>

      
        <div className="flex-1 p-5 mt-[-10px]">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default memo(Admin)