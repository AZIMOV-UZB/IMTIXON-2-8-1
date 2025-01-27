import React, { useState } from 'react'
import baner from "../../assets/images/uch.webp";

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
        <div className=' bg-cyan-400	'>
            <div className='container mx-auto py-10'>
                <form className='flex flex-col items-center gap-5 w-72 m-auto border border-solid p-4 shadow-xl bg-zinc-50 rounded-sm' onSubmit={handleCreate}>
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='title' required value={text} onChange={(event) => setText(event.target.value)} />
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="number" placeholder='phone number : 998' required value={number} onChange={(event) => setNumber(event.target.value)} />
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="number" placeholder='price' required value={price} onChange={(event) => setPrice(event.target.value)} />
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='descripshin' required value={descripshin} onChange={(event) => setDescripshin(event.target.value)} />
                    <button className='w-1/2 border rounded-lg bg-cyan-400 py-1 text-gray-50'>create</button>
                </form>
                <div className=" w-full flex gap-6 mt-8 mb-12 flex-wrap justify-center ">
                    {
                        data?.map((item) => (
                            <div className=' main__card p-4 shadow-md bg-slate-100 rounded-xl w-96 ' key={item.id}>
                                <div className='w-full'>
                                      <img
                                                      className=" h-full "
                                                      src={baner}
                                                      alt="foto"
                                                    />
                                                    </div>
                                <div className='text-center pt-3 flex flex-col gap-3'>
                                    <p className='text-2xl font-bold	'>{item.text}</p>
                                    <p className='text-xl '>{item.number}</p>
                                    <p className='text-base '>PRICE : {item.price}$</p>
                                    <p className='text-sm'> {item.descripshin}</p>
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