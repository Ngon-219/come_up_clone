import React from 'react'
import page from './user/page'
import NavBar from '@/Components/Navbar/navBar'
import Footer from '@/Components/Footer/page'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <NavBar />
        <div className='text-center m-10'>
          <p>Sorry we could find any suitable url</p> 
          <p>Back to Home page <Link href={'/'} className=' underline'>here</Link></p>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound
