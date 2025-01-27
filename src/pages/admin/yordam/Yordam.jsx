import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Yordam = () => {
    const notify = () => toast("Shikoyat qabul qlindi !!!...");

  return (
    <div className='w-full bg-white min-h-[500px] py-[40px] px-[74px] shadow rounded-lg'>
<p className='text-center text-2xl font-bold '>F. A. Q</p>
 <div className='mt-[55px]'>

<div className='shadow rounded-lg flex justify-between px-[18px] py-5 mt-4'>
    <p className='text-xl '>Ayirboshlash siyosati</p>
<button className='text-3xl font-bold hover:text-red-600'onClick={notify} >+ </button>
</div>

<div className='shadow rounded-lg flex justify-between px-[18px] py-5 mt-4'>
    <p className='text-xl '>Pulni qaytarish siyosati</p>
<button className='text-3xl font-bold hover:text-red-600'onClick={notify} >+ </button>
</div>

<div className='shadow rounded-lg flex justify-between px-[18px] py-5 mt-4'>
    <p className='text-xl '>Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?</p>
<button className='text-3xl font-bold hover:text-red-600'onClick={notify} >+ </button>
</div>

<div className='shadow rounded-lg flex justify-between px-[18px] py-5 mt-4'>
    <p className='text-xl font-[600]'>Hisob qaydnomasini qanday yarataman?</p>
<button className='text-3xl font-bold hover:text-red-600'onClick={notify} >+ </button>
</div>
<ToastContainer  position="top-center"
autoClose={1000}
limit={2}
/>


 </div>
    </div>
  )
}

export default Yordam