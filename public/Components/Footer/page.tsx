import React from 'react'
import Phone_footer from './image/Phone_footer.png'
import app_store_icon from './image/app_store.png'
import ch_play_button from './image/ch_play.png'
import Image from 'next/image'
import come_up_icon from './image/come_up_logo.png'

const Footer = () => {
  return (
      <div>
        <footer className='w-full p-8 flex justify-center'>
          <div>
            <div className='flex justify-center  text-2xl font-semibold p-4'>
              Enjoy ComeUp More Conveniently
            </div>
            <div className='flex justify-center  p-2'>
              <Image src={Phone_footer} alt="phone_image" width={200}/>
            </div>
            <div className='flex flex-row p-2 justify-center'>
              <Image src={app_store_icon} alt="phone_image" width={210} className='p-2'/>
              <Image src={ch_play_button} alt="phone_image" width={210} className='p-2'/>
            </div>
            <div className='flex flex-col justify-center w-full  p-2 text-center text-gray-600'>
              <p>ComeUp is an online ticket trading platform, not an actual ticket seller.</p>
              <p>ComeUp does not guarantee any information provided by hosts and is not responsible for transations.</p>
            </div>

            <div className='lg:block hidden m-2 relative text-left w-full text-gray-600'>
              <table>
                <tbody>
                  <tr>
                    <td className=' pr-96 '>Introduce</td>
                    <td className='pr-96 '>Regulation and form of payment</td>
                    <td className=''>Exchange and refund policy</td>
                  </tr>
                  <tr>
                    <td className='pr-96 '>General policy and regulation</td>
                    <td className='pr-96 '>Shipping delivery policy</td>
                    <td className=''>Policy to protect consumer’s personal information</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='lg:hidden block m-2 relative text-left w-full text-gray-600'>
              <p className=' pr-96 '>Introduce</p>
              <p className='pr-96 '>Regulation and form of payment</p>
              <p className=''>Exchange and refund policy</p>
              <p className='pr-96 '>General policy and regulation</p>
              <p className='pr-96 '>Shipping delivery policy</p>
              <p className=''>Policy to protect consumer’s personal information</p>
            </div>
            <div className='flex justify-center'>
              <Image src={come_up_icon} alt="" />
            </div>
            <div className='flex justify-center text-gray-600'>
              <p>South Korea<span className='p-2 font-black'>•</span>Viet Nam</p>
            </div>
            <div className='flex justify-center text-gray-600'>
              <p>STARINDEX Inc. | CEO : Wook Kim | B527, 25-11 Seongji-gil, Mapo-gu, Seoul, South Korea</p>
            </div>
            <div className='flex justify-center text-gray-600'>
              <p>contact@starindex.com | (+82)02-6243-0771 | EIN : 105-87-75277 | Mail-order Sales Registration No : 2013-seoulmapo-1355</p>
            </div>
            <div className='flex justify-center text-gray-600'>
              <p>Copyright © STARINDEX Inc. All Rights Reserved.</p>
            </div>
          </div>
         </footer>
      </div>
  )
}

export default Footer
