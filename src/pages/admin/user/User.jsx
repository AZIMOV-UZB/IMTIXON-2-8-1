import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

const User = () => {
    const [data, setDAta] = useState([]);
    const [text, setText] = useState("")
    const [number, setNumber] = useState("")
    const [price, setPrice] = useState("")
    const [descripshin, setDescripshin] = useState("")
    const handleCreate = (e) => {
        e.preventDefault()
        let object = {
            id: new Date().getTime(),
            text,
            number,
            price,
            descripshin
        }
        setDAta((prev) => [...prev, object])
        setText("")
        setNumber("")
        setPrice("")
        setDescripshin("")
    }
    return (
        <div className=' bg-white rounded-lg'>
            <div className='container mx-auto p-10'>
                <p>Sizning profilingiz</p>
                <form className='my-6 items-center max-w-[600px] p-4 shadow-xl   lg:gap-2 grid grid-cols-1   sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2' onSubmit={handleCreate}>
                    <div >
                        <p>Ism Familangiz</p>
                        <input className='mt-2 border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-[#F6F8FA]' type="text" placeholder='ism familya' required value={text} onChange={(event) => setText(event.target.value)} />
                    </div>
                    <div>
                        <p>Shaxar</p>
                        <input className='mt-2  border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-[#F6F8FA]' type="text" placeholder='shahar' required value={descripshin} onChange={(event) => setDescripshin(event.target.value)} />
                    </div>
                    <div>
                        <p>Uy manzil</p>
                        <input className='mt-2 border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-[#F6F8FA]' type="text" placeholder='uy ' required value={price} onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div>
                        <p>Tel raqami</p>
                        <input className='mt-2 border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-[#F6F8FA]' type="number" placeholder='phone number : 998' required value={number} onChange={(event) => setNumber(event.target.value)} />
                    </div>
                    <button className=' w-1/2 border rounded-lg bg-black py-1 text-gray-50'>Saqlash</button>
                </form>
                <div className=" w-full flex gap-6 mt-8 mb-12 flex-wrap  ">
                    {
                        data?.map((item) => (
                            <div className=' main__card p-4 shadow-md bg-slate-100 rounded-xl w-96 ' key={item.id}>
                                <div className='w-full'>
                                    <FaUserCircle className='text-7xl' />
                                </div>
                                <div className=' pt-3 flex flex-col gap-3'>
                                    <p className='text-2xl font-bold	'>{item.text}</p>
                                    <p className='text-xl font-[600]'> {item.descripshin}</p>
                                    <p className='text-xl'> {item.price}</p>
                                    <p className='text-xl '>{item.number}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default User