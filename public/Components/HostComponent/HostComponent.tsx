import React from 'react'
import Image from 'next/image'

const HostComponent = ({image=null}) => {
  return (
    <div className=' flex flex-row m-3'>
        <div className=' rounded-full m-2'>
            <img src="https://i.redd.it/zhaiwa9p1rab1.jpg" alt="ahihi" className=' rounded-full w-24 h-24'/>
        </div>

        <div>
            <h1 className=' font-semibold'>Host name</h1>
            <h1 className=' text-gray-300'>HostID</h1>
            <h1 className=' text-gray-500'>HostID</h1>
            <div className=' bg-background text-center '>
                <button className=' text-white'>Follow</button>
            </div>
        </div>

    </div>
  )
}

export default HostComponent