
import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full body-font mb-4">

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site logo and Name */}
        <h1 className='text-xl'>Welcome</h1>
        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
        <button>
                  <BsFillMoonStarsFill onclick={() => setDarkMode(!darkmode)} className='cursor-pointer text-2xl' />
                </button>
        {/* <ul className='flex items-center'>
               
              <li><a className='bg-yellow-500 text-white px-4 py-2 rounded-md ml-8' href="#">Home</a></li>
              <li><a className='bg-yellow-500 text-white px-4 py-2 rounded-md ml-8' href="#">Portfolio</a></li>
              <li><a className='bg-yellow-500 text-white px-4 py-2 rounded-md ml-8' href="#">Contact</a></li>
            </ul> */}
        </nav>
        
        {/* Burger icon standard */}
        {/* <button>
                  <BsFillMoonStarsFill onclick={() => setDarkMode(!darkmode)} className='cursor-pointer text-2xl' />
                </button> */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      
      {/* { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
        <a className=' block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700' href="#">Home</a>
        <a className=' block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700' href="#">Portfolio</a>
        <a className=' block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700' href="#">Contact</a>
        </div>
      }
       */}
    </header>
  )
}

export default Navbar
