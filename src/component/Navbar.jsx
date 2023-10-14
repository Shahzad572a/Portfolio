import React, { useState } from 'react'
import reactLogo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'


import {styles} from '../style'
import {navLinks} from '../constants/data'
import { Link } from 'react-router-dom'
debugger
const Navbar = () => {
  const [active ,setActive] =useState('')
  const [toggle ,setToggle] =useState(false)
  
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
        to='/'
        className='flex items-center gap-2'
        onClick={() =>{
          setActive(''); 
          window.scroll(0,0)}}
        >
          <img src={reactLogo} alt="logo" className='w-10 h-10 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Shahzad &nbsp; <span className='sm:block hidden'>| MERN Stack Developer</span></p>
        </Link>
 
        <ul className='list-none hidden sm:flex flex-row gap-10'>
         {navLinks.map((link) => (
         <li key={link.id}
         className={`${active ===link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[19px] font-medium cursor-pointer`}
         onClick={() => setActive(link.title)}
         >
         <a href={`#${link.id}`}>{link.title}</a>
        </li>
       ))}
     </ul>


  {/* Togele for moblie screen small screen */}
  <div className="sm:hidden flex flex-1 justify-end items-center">
      {toggle ? (
        <img
          src={close}
          alt="close"
          className="bg-white w-[25px] h-[28px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <img
          src={menu}
          alt="menu"
          className="bg-white w-[25px] h-[28px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end item-start flex-col gap-2">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins text-[16px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

      </div>
      
    </nav>
  )
}

export default Navbar
