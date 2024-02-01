import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoClose } from "react-icons/io5";


function Navbar() {

    const [Display, setDisplay] = useState(false)

    const displayMenu = () => {
        setDisplay (!Display);
    }

  return (
    <div className='bg-black '>
        <div className=' h-[70px] w-full  px-[5%] '> 
           <section className='text-white flex justify-between items-center h-full'>
                <div className='flex items-center gap-2'>
                     <MdOutlineFoodBank size={32} />
                    <h2> <Link to={"/"}>Elezuzuo Restaurant</Link></h2>
                </div>
                <div className=''>
                    <ul className=' hidden lg:flex gap-2 md:flex uppercase'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>

                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>

                        <li>
                            <Link to={"/menu"}>Menu</Link>
                        </li>
                        <li>
                            <Link to={"/gallery"}>Gallery</Link>
                        </li>
                        <li>
                            <Link to={"/faq"}>FAQ</Link>
                        </li>
                        <div className='hidden lg:flex md:flex ml-4 gap-4 items-center'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    </div>
                    </ul>
                     
                    

                    <div className=' lg:hidden md:hidden ' onClick={displayMenu}>
                     {!Display ? <HiMenuAlt3 size={30} /> : <IoClose size={30} />}   
                   
                    </div>

                </div>
                
               
           </section>
        </div>
                 <div  className={Display ? ' px-[5%]' : 'hidden'} onClick={displayMenu}> 
                    <ul className=' lg:hidden md:hidden uppercase text-white flex flex-col gap-3 '>
                        <li >
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>

                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>

                        <li>
                            <Link to={"/menu"}>Menu</Link>
                        </li>
                        <li>
                            <Link to={"/gallery"}>Gallery</Link>
                        </li>
                        <li>
                            <Link to={"/faq"}>FAQ</Link>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default Navbar