import React from 'react'
import Image from 'next/image'

const Item = (image:any) => {
  return (
    <div className='w-full m-2 border-none shadow-md rounded-md bg-slate-100 items-center flex flex-col justify-center'>
        <div className='w-full m-2'>
            <img src={image.name} alt="ahihi"/>
        </div>

        <div className='w-full ml-2'>
            <div className=' text-left font-semibold'>
                <p>Event_name</p>
            </div>
            <div className=' text-left'>
                <p>date</p>
            </div>
            <div className=' text-left'>
                <p>address</p>
            </div>
            <div className=' text-left text-gray-500'>
                <p>tag</p>
            </div>
        </div>
    </div>
  )
}

export default Item