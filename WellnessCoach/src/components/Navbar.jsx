import  { useEffect, useState } from 'react'
// import { flushSync } from 'react-dom';
import { MdMenu, MdClose } from "react-icons/md";

import headerlogo from "../assets/header-logo.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewW, setViewW] = useState()
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
  const width = document.body.clientWidth;
  setViewW(width);
  // Use the calculated width directly
  setIsOpen(width <= 576);
}, []);

window.addEventListener('resize', (e) => {
    console.log(e);
    setViewW(e)
})
  return (
    <nav className="bg-[#F5F2E9] flex justify-between items-center p-4 relative">
      <a href="/" className=' text-4xl lg:pl-20 md:pl-8 text-[sans-serif] font-[400] leading-4'><img src={`${headerlogo}`} className='h-8 max-h-32' alt="website logo" /></a>

      {/* Desktop */}
      <ul className='Nav-Menu gap-10 items-center justify-center hidden md:flex'>
        <li className='text-[16px] font-[400] leading-4 hover:text-[#70A309]'><a href="/" >HOME</a></li>
        <li className='text-[16px] font-[400] leading-4 hover:text-[#70A309]'> <a href="/about" > ABOUT</a></li>
        <li className='text-[16px] font-[400] leading-4 hover:text-[#70A309]'><a href="/services">SERVICES</a></li>
        <li className='text-[16px] font-[400] leading-4 hover:text-[#70A309]'><a href="/contact">CONTACT</a></li>
        <li className='text-[16px] font-[400] leading-4 lg:mr-[50px]'> 
          <button className='border-[1px] border- p-2.5 px-[40px] rounded-3xl hover:bg-[#70A309] hover:text-white'>
            Call:(202)555-0124
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className='p-2 md:hidden bg-red text-2xl text-white rounded' onClick={handleClick}>
        {isOpen ? <MdClose color='green' /> : <MdMenu color='green' />}
      </button>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-[#F5F2E9] shadow-md md:hidden'>
          <ul className='flex flex-col gap-6 items-start py-6 pl-8'>
            <li className='hover:text-[#70A309]'><a href="/" >HOME</a></li>
            <li className='hover:text-[#70A309]'><a href="/about" > ABOUT</a></li>
            <li className='hover:text-[#70A309]'><a href="/services">SERVICES</a></li>
            <li className='hover:text-[#70A309]'><a href="/contect">CONTECT</a></li>
            
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;