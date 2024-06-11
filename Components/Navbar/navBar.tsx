import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navLogo from './image/navLogo.png'
import search_icon from './image/search_icon.png'
import global_icon from './image/global_icon.png'
import account_icon from './image/account_icon.png'
import notification_icon from './image/notification_icon.png'
import press_down_icon from './image/press_down_icon.png'
import host_btn from './image/host_button.png'

function NavBar() {
  return (
    <main>
      <div>
      <nav className="flex flex-row bg-nav-bar w-full text-center items-center">
        <div className='inline-block hover:cursor-pointer'>
            <a href="/"><Image src={navLogo} alt="" width={200}/></a>
        </div>
        <div className='laptop:flex flex-row hidden'>
          <div className='pl-8 text-white font-medium '>
            EVENT
          </div>
          <div className='pl-8 text-white font-medium '>
            VENUE
          </div>
          <div className='pl-8 text-white font-medium '>
            HOST
          </div>
          <div className='pl-8 text-white font-medium '>
            LIKED
          </div>
          <div className='pl-8 text-white font-medium '>
            MY TICKET
          </div>
        </div>

        <div className='absolute right-5 flex flex-row items-center'>
          <div className=' laptop:block hidden rounded-full border-2 border-white p-10px pl-10 pr-10 pt-0 pb-0 hover:cursor-pointer'>
            <div className='text-white font-medium flex flex-row items-center'>
                <Image src={host_btn} alt=""/>
                <p className='pl-2 font-extrabold'>BECOME A HOST!</p>
            </div>
        </div>
        <div className='right-navbar-items'>
          <Image src={notification_icon} alt="" width={40}/>
        </div>
        <div className='right-navbar-items'>
          <Image src={search_icon} alt="" width={40}/>
        </div>
        <div className='right-navbar-items'>
          <Image src={global_icon} alt="" width={40}/>
        </div>
        <div className='hidden right-navbar-items laptop:flex flex-row pr-0'>
          <Image src={account_icon} alt="" width={40}/>
          <Image src={press_down_icon} alt="" width={40}/>
        </div>
        </div>
      </nav>
      </div>
    </main>
  )
}

export default NavBar