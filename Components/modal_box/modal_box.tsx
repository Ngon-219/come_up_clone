import X_icon from './images/x_icon.png'
import Image from 'next/image'
import dropdown_icon from './images/dropdown_icon.png'
import React, { useEffect } from 'react'

const Modal:React.FC<any> = ({ open, onClose}) => {

  const diableScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const allDiableScroll = () => {
    diableScroll();
    onClose()
  }

  const ableScroll = () => {
    document.body.style.overflow = ''
  }

  const allAbleScroll = () => {
    ableScroll();
    onClose()
  }

  useEffect(() => {
    open ? diableScroll() : ableScroll()
  })

  return (
    // backdrop
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
    
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-20 pt-2 pb-80 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <div className=" absolute right-4  p-2 flex justify-end">
          <button
            onClick={() => {
              allAbleScroll()
            }}
            className="p-0 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <Image src={X_icon} alt="" width={30}/>
          </button>
        </div>

        <div className=" p-2 flex justify-end">
          <button
            onClick={onClose}
            className="p-0 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 h-4"
          >
            {/* <Image src={X_icon} alt="" width={30} /> */}
          </button>
        </div>
        

        <div className=" font-semibold text-2xl ">
          Chọn một thành phố
        </div>
        <div className='absolute left-8'>
          <p className=' text-blue-400 font-semibold'>Hàn Quốc</p>
          <p className=' text-blue-400 font-semibold'>Hoa Kỳ</p>
          <p className=' text-blue-400 font-semibold'>Việt Nam</p>
        </div>
      </div>
    </div>
  )
}

export default Modal