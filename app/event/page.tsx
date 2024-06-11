"use client"

import React from 'react'
import Image from 'next/image'
import NavBar from '@/public/Components/Navbar/navBar'
import Footer from '@/public/Components/Footer/page'
import Slider from '@/public/Components/image_slider/slider'
import cities_icon from './image/city_icon.png'
import category_icon from './image/category_icon.png'
import calender_icon from './image/calender_icon.png'
import dropdown_menu from './image/dropdown_icon.png'
import { useState } from 'react'
import Modal from '@/public/Components/modal_box/modal_box'
import Item from '@/public/Components/Item/page'
import pre_icon from './image/pre_icon.png'
import { useEffect, useContext } from 'react'
import Link from 'next/link'
import SampleContext from '@/public/Context/SampleContext'


const Event = () => {
    const image = useContext(SampleContext)
    if(!image) {
        alert('ahihi')
    }

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = image.slice(firstIndex, lastIndex)
    const npage = Math.ceil(image.length / recordsPerPage)
    const numberPage = Array.from({length: npage}, (_, i) => i+1)

    const prePage = () => {
        currentPage == 1 ? (
            alert("Cannot go to previous page")
        ) : (
            setCurrentPage(currentPage - 1)
        )
    }

    const allPrevPage = () => {
        prePage();
        globalThis. scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const nextPage = () => {
        currentPage == npage ? (
            alert("Cannot go to next page")
        ) : (
            setCurrentPage(currentPage + 1)  
        )
    }

    const allNextPage = () => {
        nextPage();
        globalThis. scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const focusToPage = (page:number) => {
        setCurrentPage(page)
        globalThis. scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const [open, setOpen] = useState(false)

  return (
    <div className='w-full p-0'>
        <NavBar />
        <Slider slides={image}/>
        <div className=' grid grid-cols-2 laptop:grid-cols-5 m-4'>
            <div className='shadow-lg flex flex-row laptop:justify-start justify-center items-center border-2 rounded-lg p-2' onClick={() => {setOpen(true)}}>
                <a href="/event"><Image src={cities_icon} alt="" width={40}/></a>
                <div className='flex justify-center w-full'>
                    <p className='font-bold'>Select cities </p>
                </div>
                <div className='p-4'>
                    <Modal open = {open} onClose = {() => {setOpen(false)}}/>
                    <Image src={dropdown_menu} alt="" width={20}/>
                </div>
            </div>
            <div className='shadow-lg flex flex-row laptop:justify-start justify-center items-center border-2 rounded-lg p-2' onClick={() => {setOpen(true)}}>
                <a href="/event"><Image src={calender_icon} alt="" width={40}/></a>
                <div className='flex justify-center w-full'>
                    <p className='font-bold'>All Time</p>
                </div>
                <div className='p-4'>
                    <Modal open = {open} onClose = {() => {setOpen(false)}}/>
                    <Image src={dropdown_menu} alt="" width={20}/>
                </div>
            </div>
            <div className='shadow-lg flex flex-row laptop:justify-start justify-center items-center border-2 rounded-lg p-2 col-span-2 laptop:col-span-1 laptop:m-0 mt-2' onClick={() => {setOpen(true)}}>
                <a href="/event"><Image src={category_icon} alt="" width={40}/></a>
                <div className='flex justify-center w-full'>
                    <p className='font-bold'>All Category</p>
                </div>
                <div className='p-4'>
                    <Modal open = {open} onClose = {() => {setOpen(false)}}/>
                    <Image src={dropdown_menu} alt="" width={20}/>
                </div>
            </div>
            <div className='hidden laptop:block'>
                
            </div>
            <div className='item-center text-center p-4 hidden laptop:block'>
                <button className='border-none text-white p-4  bg-background rounded-md'>View on map</button>
            </div>
        </div>

        <div className=' grid grid-cols-1 laptop:grid-cols-3 gap-4 m-4'>
            {
                records.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link href={`/event/${item.code}`}><Item image={item}/></Link>
                        </div>
                        // <div className='block border-2'>
                            
                        //     <a href={`/${index}`}></a>
                        // </div>
                    )
                })
            }
        </div>

        <div className='w-full flex justify-center'>
            <div className='flex flex-row w-fit m-2 justify-center p-2 pt-0 pb-0 rounded-full bg-slate-200 text-center items-center'>
                <div>
                    <button className='p-0' onClick={allPrevPage}><Image src={pre_icon} alt="" width={10} className=' p-0 m-0'/></button>
                </div>
                <div className='flex flex-row'>
                {
                    numberPage.map((item, index) => {
                        return(
                            <div key={index} onClick={() => {
                                focusToPage(item)
                            }} className={`m-2 ${currentPage==item ? (' underline'): ('rounded-full')}`}><p>{item}</p></div>
                        )
                    })
                }
                </div>
                <div>
                    <button className='p-0' onClick={allNextPage}><Image src={pre_icon} alt="" width={10} className=' p-0 m-0  rotate-180'/></button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Event