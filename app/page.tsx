// import Image from 'next/image'
"use client"

import { useState } from 'react'
import Footer from '@/public/Components/Footer/page'
import NavBar from '@/public/Components/Navbar/navBar'
import Slider from "@/public/Components/image_slider/slider"
import Modal from '@/public/Components/modal_box/modal_box'
import dropdown_icon from '@/public/Components/modal_box/images/dropdown_icon.png'
import Image from 'next/image'
import event_icon from '@/public/images/event_icon.png'
import venue_icon from '@/public/images/venue_icon.png'
import host_icon from '@/public/images/host_icon.png'
import create_event_btn from '@/public/images/create_event_btn.png'
import create_venue_btn from '@/public/images/create_venue_btn.png'
import create_host_btn from '@/public/images/create_host_btn.png'
import Item from '@/public/Components/Item/page'
import HostComponent from '@/public/Components/HostComponent/HostComponent'
import VenueComponent from '@/public/Components/VenueComponent/VenueComponent'
import { useContext } from 'react'
import SampleContext from '@/public/Context/SampleContext'
import page from './user/page'
import Head from 'next/head'


export default function Home() {
  const disableScroll = () => {
    window.onscroll = () => {
      document.body.style.overflow = "hidden"
    }
  }
  const [open, setOpen] = useState(false)
  const [event_see_more, setEventSeeMore] = useState(6)
  const [venue_see_more, setVenueSeeMore] = useState(6)
  const [host_see_more, setHostSeeMore] = useState(6)

  const tg = () => {
    document.getElementById("event")?.scrollIntoView(true)
    setEventSeeMore(6)
    return 6;
  }
  
  const image:any = [
    {name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
    {name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
    {name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
    {name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
    {name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
    {name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
    {name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
    {name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
    {name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
    {name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
    {name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
    {name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  ]

  const venueImage = useContext(SampleContext)
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Slider slides={image} />
      <div className='laptop:ml-32 laptop:mr-32 ml-8 mr-8'>
        <div className=' laptop:flex laptop:justify-start laptop:pt-5'>
          <button onClick={() => setOpen(true)} className='laptop:mt-4 laptop:mb-4 laptop:flex laptop:flex-row laptop:items-center laptop:border-b-2 laptop:border-black flex flex-row items-center mt-4 mb-4'>
            <p className='text-2xl font-semibold pr-2'>Hà Nội</p>
            <Image src={dropdown_icon} alt="" width={10} />
          </button> 
          <Modal open = {open} onClose = {() => {setOpen(false)}}/> 
          <div>
          </div>
        </div>
        <div className=' grid grid-cols-3 gap-3'>
          <div className='hover:cursor-pointer shadow-lg flex flex-row laptop:justify-start justify-center items-center border-2 rounded-lg p-2' onClick={() => {
            return window.location.href = "/event"
          }}>
            <a href="/event"><Image src={event_icon} alt="" width={40}/></a>
            <div className='laptop:flex laptop:justify-center laptop:w-full hidden'>
              <p>EVENT</p>
            </div>
          </div>
          <div className='hover:cursor-pointer shadow-lg flex flex-row laptop:justify-start justify-center items-center border-2 rounded-lg p-2' onClick={() => {window.location.href = '/venue'}}>
            <Image src={venue_icon} alt="" width={40}/>
            <div className='laptop:flex laptop:justify-center laptop:w-full hidden'>
              <p>VENUE</p>
            </div>
          </div>
          <div className='hover:cursor-pointer shadow-lg flex flex-row laptop:justify-start justify-center items-center border-2 rounded-lg p-2' onClick={() => {window.location.href='host'}}>
            <Image src={host_icon} alt="" width={40}/>
            <div className='laptop:flex laptop:justify-center laptop:w-full hidden'>
              <p>HOST</p>
            </div>
          </div>
        </div>

        <div className=' mt-10 mb-5'>
          <p className='font-semibold text-2xl' id='event'>EVENT</p>
          <div className='flex justify-center'>
          {
            venueImage.length !=0 ? (
              <div>
                <div className={`grid grid-cols-2 laptop:grid-cols-3 gap-0 w-full`}>
                  {venueImage.map((item, index) => {
                    return (index < event_see_more) ?(
                      <div key={index} className='flex justify-center hover:cursor-pointer' onClick={() => { window.location.href = `event/${item.code}`}}>
                          <Item image={item}/>
                      </div>
                    ) : (
                      <div className='hidden'></div>
                    )
                  })}
                </div>
                <div className='w-full flex justify-center'>
                  <div className='laptop:w-40 w-full text-center m-2 border-2 p-4'>
                    <button onClick={() => {
                      setEventSeeMore(() => {
                        return venueImage.length > 6 ? (
                          (event_see_more >= venueImage.length) ? (tg()) : (event_see_more + 3)
                        ): (
                            6
                        )
                      })
                    }}>
                      {venueImage.length > 6 ? (
                      (event_see_more >= venueImage.length) ? "See less" : "See more"
                      ): (
                      "Don't have more event"
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
            ) : (
              <div>
                <div className='w-full flex justify-center mb-2'>
                  <p className='text-center'>Commodi quia facilis vero. Sit explicabo laboriosam assumenda itaque.</p>
                </div>
                <div className='w-full flex justify-center'>
                  <Image src={create_event_btn} alt="" width={150}/>
                </div>
              </div>
            )
          }
          </div>
        </div>

        <div className=' mt-10 mb-5'>
          <p className='font-semibold text-2xl'>VENUE</p>
          {
            image.length!=0 ? (
              <div>
                <div className=' grid grid-cols-2 laptop:grid-cols-3 gap-2'>
                  {
                    image.map((item:any, index:any) => {
                      return index < venue_see_more ? (
                        <div key={index}>
                          <VenueComponent image={item}/>
                        </div>
                      ) : (
                        <div></div>
                      )
                    })
                  }
                </div>
                <div className='w-full flex justify-center'>
                  <div className='laptop:w-40 w-full text-center m-2 border-2 p-4'>
                    <button onClick={() => {
                      setVenueSeeMore(() => {
                        return image.length > 6 ? (
                          (venue_see_more >= image.length) ? (6) : (venue_see_more + 3)
                        ): (
                          6
                        )
                      })
                    }}>
                      {image.length > 6 ? (
                      (venue_see_more >= image.length) ? "See less" : "See more"
                      ): (
                      "Don't have more venue"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className='w-full flex justify-center mb-2'>
                  <p className='text-center'>Commodi quia facilis vero. Sit explicabo laboriosam assumenda itaque.</p>
                </div>
                <div className='w-full flex justify-center'>
                  <Image src={create_venue_btn} alt="" width={150}/>
                </div>
              </div>
            )
          }
        </div>

        {
          image.length != 0 ? (
            <div>
              <div className=' mt-10 mb-5'>
                <p className='font-semibold text-2xl'>HOST</p>
              </div>
              <div className=' grid grid-cols-2 laptop:grid-cols-3 gap-2 w-full m-2'>
                {
                  image.map((item:any, index:any) => {
                    return index < host_see_more ? (
                      <div key={index}>
                        <HostComponent />
                      </div>
                    ) : (
                      <div></div>
                    )
                  })
                }
              </div>

              <div className='w-full flex justify-center'>
                  <div className='laptop:w-40 w-full text-center m-2 border-2 p-4'>
                    <button onClick={() => {
                      setHostSeeMore(() => {
                        return image.length > 6 ? (
                          (host_see_more >= image.length) ? (6) : (host_see_more + 3)
                        ): (
                          6
                        )
                      })
                    }}>
                      {image.length > 6 ? (
                      (host_see_more >= image.length) ? "See less" : "See more"
                      ): (
                      "Don't have more host"
                      )}
                    </button>
                  </div>
                </div>
              
            </div>
          ) : (
            <div>
              <div className=' mt-10 mb-5'>
                <p className='font-semibold text-2xl'>HOST</p>
                <div className='w-full flex justify-center mb-2'>
                  <p className='text-center'>Commodi quia facilis vero. Sit explicabo laboriosam assumenda itaque.</p>
                </div>
                <div className='w-full flex justify-center'>
                  <Image src={create_host_btn} alt="" width={150}/>
                </div>
              </div>
            </div>
          )
        }

        <div className='w-full flex justify-center'>
          <div className='text-center flex flex-col border-none laptop:w-80 w-full p-4 pt-2 pb-2 bg-background'>
            <p className='text-white font-thin'>+ Register</p>
            <p className='text-white font-thin'>Event/Venue/Host</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
