import logo from './../assets/images/logo.png'
import { GiCancel } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react'

const Navbar = ({ theme, setTheme }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='bg-gray-900 flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4
    sticky top-0 z-20 backdrop-blur-xl font-medium'>
      
      <img src={logo} alt="logo" className='w-16 md:w-40 rounded-full object-cover bg-white' />

      <h1 className='text-4xl md:text-6xl font-bold text-[#F9AA33]  m-2'>NAZIYAH CREED</h1>

      <div className={`flex text-gray-600 dark:text-white sm:text-sm 
        ${!sidebar ? 'max-sm:hidden overflow-hidden ' : 'max-sm:w-60 max-sm:pl-10 bg-gradient-to-b from-[#0F1E3E] via-[#F9AA33] to-[#EEBA2B] shadow-2xl '}
        gap-5 transition-all sm:items-center 
        max-sm:fixed max-sm:right-0 max-sm:top-0 max-sm:bottom-0
        max-sm:w-60 max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:pl-10 max-sm:pt-20
        text-white text-2xl`}>
        
        <GiCancel
          className='text-4xl text-white cursor-pointer sm:hidden absolute top-12 right-5'
          onClick={() => setSidebar(false)}
        />

        <a href="/#home" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-white sm:hover:text-[#ffc22e]  text-xl hover:scale-105 transition-all'>
          Home
        </a>
        

        <a href="/#about" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-white sm:hover:text-[#ffc22e] text-xl hover:scale-103 transition-all'>
          About
        </a>

        <a href="/#service" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-white sm:hover:text-[#ffc22e] text-xl hover:scale-103 transition-all'>
          Services
        </a>

        <a href="/#projects" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-white sm:hover:text-[#ffc22e] text-xl hover:scale-103 transition-all'>
          Projects
        </a>
        <a href="/#certificates" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-white sm:hover:text-[#ffc22e] text-xl hover:scale-103 transition-all'>
          Certificates
        </a>


        <a href="/#contact" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-white sm:hover:text-[#ffc22e] text-xl hover:scale-103 transition-all'>
          Contact

        </a>
      
      </div>

      <div>
        <IoMenuSharp className='text-3xl text-gray-600 dark:text-white cursor-pointer sm:hidden' onClick={() => setSidebar(true)} />
      </div>
    </div>
  )
}

export default Navbar;
