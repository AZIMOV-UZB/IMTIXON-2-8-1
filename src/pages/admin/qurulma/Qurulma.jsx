import React, { useState } from 'react'
import baner from "../../../assets/images/qur.webp"

const Qurulma = () => {
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
        <div className=' bg-white py-10 px-4	container mx-auto '>
                <p className='text-3xl font-[700] p-2'>Qurilma qo‘shish</p>
                <form className='flex flex-col items-center gap-5 w-72   p-4 ' onSubmit={handleCreate}>
                    <p className='text-start'>Qurilma markasi</p>
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='Qurilma markasi' required value={text} onChange={(event) => setText(event.target.value)} />
                    <p className='text-start'>Qurilma modeli</p>
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='Qurilma modeli' required value={descripshin} onChange={(event) => setDescripshin(event.target.value)} />
                    <button className='px-2 border rounded-lg bg-green-500 py-1 text-gray-50'>Qurulmangizni qoshish</button>
                </form>
                <div className="  flex gap-6 mt-8 mb-12 flex-wrap ">
                    {
                        data?.map((item) => (
                            <div className='p-4 shadow-md bg-slate-100 rounded-xl max-w-[320px] ' key={item.id}>
                                <div className=' border rounded-lg'>
                                      <img
                                                       src={baner}
                                                      alt="foto"
                                                    />
                                                    </div>
                                <div className=' pt-3 '>
                                    <p className='text-2xl font-bold'>{item.text}</p>
                                    <p className='text-sm px-2'> {item.descripshin}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
    )
}

export default Qurulma