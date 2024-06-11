"use client"

import React from 'react'
import NavBar from '@/Components/Navbar/navBar'
import Footer from '@/Components/Footer/page'
import Item from '@/Components/Item/page'
import Slider from '@/Components/image_slider/slider'
import { useContext } from 'react'
import SampleContext from '@/public/Context/SampleContext'
import { usePathname } from 'next/navigation'
import clock_icon from '../image/clock.png'
import Image from 'next/image'
import address_icon from '../image/address.png'
import map from '../image/map.png'
import share_icon from '../image/share_icon.png'
import settingIcon from '../image/setting_Icon.png'
import book_ticket from '../image/book_ticket.png'
import heart from '../image/heart.png'
import share from '../image/share.png'
import NotFound from '@/app/not-found'

const EventDetail = ({params} : {
    params: {eventId: string}
}) => {
  const pathname = usePathname()
  const image = useContext(SampleContext)
  
  const event_code = pathname.split('/')[2]
  console.log(params , pathname, event_code)
  const target_event = image.find((element) =>  {
    return element.code == event_code
  }) 
  return target_event ?(
    <div>
      <NavBar />
      <div className='laptop:mt-5 laptop:mr-20vh laptop:ml-20vh  border-none'>
        <div className=' grid grid-cols-3'>
          <div className='laptop:row-span-10 laptop:col-span-1 row-span-1 col-span-3 border-none'>
            <div className='flex flex-col'>
              <div className='shadow-md'>
                <img src={target_event?.name} alt="" className='laptop:h-80vh h-20vh w-full'/>
                <Image src={map} alt="" className='w-full h-28 mt-4 hidden laptop:block' />
                <div className='mt-4 mb-4 justify-center w-full hidden laptop:flex'>
                  <button className='flex flex-row items-center p-4 pt-0 pb-0 border-none border-background'>
                    <Image src={share_icon} alt=""width={15} />
                    <p className='text-background'>Share</p>
                  </button>
                </div>
              </div>
              <div className='text-center mt-4 hidden laptop:block'>
                <h1 className='font-bold'>Event Code: {target_event?.code}</h1>
                <p>Please check that the event code on tickets exactly matches this code.</p>
              </div>
            </div>
          </div>
          <div className=' col-span-2 border-none ml-4 laptop:mt-0 mt-4'>
            <h1 className='font-2xl font-bold'>{target_event?.description}</h1>
            <div className='flex flex-row items-center'>
              <Image src={clock_icon} alt="" className='w-5 h-5 mr-2'/>
              <p className='text-gray-300'>Thu DD MMM YYY hh:mm ~ DD MMM YYYY hh:mm</p>
            </div>
            <div className='flex flex-row mt-1'>
              <Image src={address_icon} alt="" className='w-5 h-5 mr-2'/>
              <p className='text-gray-300'>Address</p>
            </div>
          </div>
          <div className=' laptop:flex laptop:justify-end hidden'>
            <div className='relative flex flex-row p-4 pt-0 pb-0 h-8 bg-gray-300 w-fit group items-center mr-2'>
              <Image src={settingIcon} alt="" className='w-5 h-5 mr-2'/>
              <p>Event Settings</p>
              <div className='group-hover:block bg-white absolute top-10 right-0 hidden text-right shadow-md p-4 w-20vh '>
                <p className='text-right'>Edit Event & Ticket</p>
                <p className='text-right'>Event Staff</p>
                <p className='text-right'>Collaborating Host</p>
                <p className='text-right'>Request Refund</p>
                <p className='text-right'>Ticket Scanner</p>
                <p className='text-right'>Ticket Holder List</p>
                <p className='text-right'>Ticket Sales & Withdrawal</p>
                <p className='text-right'>Delete</p>
                <p className='text-right'>Report To comeUp</p>
              </div>
            </div>
          </div>
          <div className='hidden laptop:flex laptop:justify-center laptop:bg-background'>
            <div className='flex flex-row p-4 pt-0 pb-0 h-8 bg-background group items-center mr-2'>
              <Image src={book_ticket} alt="" className='w-5 h-5 mr-2'/>
              <p className=' text-white'>Book Tickets</p>
            </div>
          </div>
          <div className='border-none ml-2 mt-2 laptop:col-span-2 col-span-3 flex flex-row overflow-x-auto  no-scrollbar shadow-md'>
              {
                image.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className='w-14 h-14 bg-gray-400 rounded-full m-2'></div>
                    </div>
                  )
                })
              }
          </div>
          <div className='border-none ml-2 mt-2 col-span-2'>
              <h1 className='block text-gray-400'>Description</h1>
              <h1 className='block text-gray-400'>FAQ</h1>
              <div className='flex flex-col'>
                <p className='font-bold'>A. How to check-in</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>B. Restrictions</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>C. Parking</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>D. Refund</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
                <p className='ml-2'>+, ComeUp E-ticket</p>
              </div>
          </div>

          <div className=' laptop:col-span-2 col-span-3 shadow-md'> 
            <h1 className='font-bold text-2xl ml-2'>Instagram</h1>
            <div className='border-none ml-2 mt-2 col-span-2 flex flex-row overflow-x-auto  no-scrollbar'>
                {
                  image.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className='w-36 h-44 bg-gray-400 m-2 rounded-md'></div>
                      </div>
                    )
                  })
                }
            </div>
          </div>

          <div className=' laptop:col-span-2 col-span-3 ml-2 mr-2'> 
            <h1 className='font-bold text-2xl ml-2'>Host New</h1>
            <div className='w-full border-2 border-background text-center p-2'>
              <p className=' text-background'>Write</p>
            </div>
            <div className='mt-2 w-full border-none shadow-md border-gray-400 p-2 text-center'>
              <div className='flex flex-row items-center'>
                <div className=' w-20 h-20 rounded-full bg-gray-500'></div>
                <div className='ml-2 text-left'>
                  <p className='font-bold text-xl'>Host Name</p>
                  <p className='text-gray-400'>Thu DD MMM YYY hh:mm ~ DD MMM YYYY hh:mm</p>
                </div>
              </div>
              <p>Host Name makes your life more enjoyable. Follow us and stay updated!</p>
              <div className='flex flex-row gap-x-4 items-center'>
                <Image src={heart} alt="" className='w-6 h-6'/>
                <Image src={share} alt="" className='w-5 h-5'/>
              </div>
            </div>
            <p className='text-center mt-4 text-background'>Read All News</p>
          </div>

          <div className='ml-2 border-none laptop:col-span-1 col-span-3'>
            <p className='text-2xl font-bold'>Host</p>
            <div className='flex flex-row items-center'>
                <div className=' w-20 h-20 rounded-full bg-gray-500'></div>
                <div className='ml-2 text-left'>
                  <p className='font-bold text-xl'>Host Name</p>
                  <p className='text-gray-400'>(HostID)</p>
                  <p className='text-gray-400'>#Tag #Tag</p>
                </div>
              </div>
          </div>

          <div className='flex laptop:justify-end ml-24 items-center mr-2 laptop:col-span-1 col-span-3'>
            <div className='border-2 p-4 pt-0 pb-0 w-fit h-fit '>
              <button>Host Page</button>
            </div>
          </div>

          <div className='col-span-2 mt-2'>
            <p className='text-2xl font-bold ml-2'>Collaborating Host</p>
            <div className='flex flex-row items-center m-2'>
                <div className=' w-20 h-20 rounded-full bg-gray-500'></div>
                <div className='ml-2 text-left'>
                  <p className='font-bold text-xl'>Host Name</p>
                  <p className='text-gray-400'>(HostID)</p>
                  <p className='text-gray-400'>#Tag #Tag</p>
                </div>
              </div>
              <div className='flex flex-row items-center m-2'>
                <div className=' w-20 h-20 rounded-full bg-gray-500'></div>
                <div className='ml-2 text-left'>
                  <p className='font-bold text-xl'>Host Name</p>
                  <p className='text-gray-400'>(HostID)</p>
                  <p className='text-gray-400'>#Tag #Tag</p>
                </div>
              </div>
              <div className='flex flex-row m-2 items-center'>
                <div className='w-20 h-20 pt-5 text-center rounded-full border-2 border-background'>
                  <p className='text-2xl text-background'>+</p>
                </div>

                <p className='m-2'>Apply for Collaborating Host on this event</p>
                
              </div>
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  ) : (
    <NotFound />
  )
}

export default EventDetail