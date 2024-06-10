import React from 'react'

const VenueComponent = ({image}) => {
  return (
    <div className='p-2 border-none shadow-md m-2 w-full rounded-md'>
        <div className='mb-8'>
            <div className='relative border-2'>
                <img className='w-full h-36' src={image.name}  alt="" />
                <img className=' absolute top-20 left-4 w-20 h-20' src={image.name} alt="" />
            </div>
            {/* <div className='absolute top-28 left-10'>
                
            </div> */}
        </div>
        <div>
            <h1 className='font-semibold'>Venue</h1>
            <h1 className=' text-gray-500'>#Tag #Tag</h1>
            <h1 className=' text-gray-500'>address</h1>
            <h1 className=' text-gray-500'>hh:mm - hh:mm</h1>
        </div>
    </div>
  )
}

export default VenueComponent