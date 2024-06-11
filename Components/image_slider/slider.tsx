"use client"

import React from 'react'
import { useEffect, useState } from "react";
import next_icon from './Images/next_icon.png'
import prev_icon from './Images/prev_icon.png'
import { SlidesComponentProps } from '@/public/model/slides.model';
import Image from 'next/image';
import { slidesModel } from '@/public/model/slides.model';

const Slider:React.FC<SlidesComponentProps> = ({slides}) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === slides.length - 1
    ? setActiveImage(0)
    :setActiveImage(activeImage + 1)
  }
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(slides.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 2000);
    return () => {
      clearTimeout(timer)
    }
  }, [activeImage])

  return (
    <div className=' relative bg-slate-500 w-full h-40vh border-none laptop:h-50vh top-0'>
      <div className=' absolute left-0 h-40vh laptop:h-50vh flex items-center p-2 flex'>
        <Image src={prev_icon} alt="" className='h-8 w-8' onClick={clickPrev}/>
      </div>
      <div className=' absolute right-0 h-40vh laptop:h-50vh flex items-center p-2'>
        <Image src={next_icon} alt="" className='h-8 w-8' onClick={clickNext}/>
      </div>
      <div>
        {Array.from(slides).map((elem, index) => (
          <div
          key={index}
          className={
            `${
              index === activeImage ? "block w-full h-40vh laptop:h-50vh object-cover transition-all duration-500 ease-in-out" : "hidden"
            }`
          }>
            <img src={elem.name} alt={elem.description} className=' h-40vh laptop:h-50vh w-full'/>
          </div>
        ))}
      </div>
      <div className='absolute flex justify-center w-full bottom-1 flex-row'>
        <div className='border-none rounded-md pt-0 pb-0 pr-3 pl-3 text-center'>
          {Array.from(slides).map((elem, index) => (
              <p key={index} className= {
                `${
                  index === activeImage ? " inline-block text-3xl text-slate-100" : " inline-block text-3xl text-slate-500"
                }`
              }>•</p>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default Slider