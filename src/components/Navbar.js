import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu  } from "react-icons/ai";
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = ()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 fixed drop-shadow-lg bg-[#070909]  text-black dark:text-white'>
      <div className='px-2 flex justify-between items-center w-full h-full  shadow-lg cursor-pointer'> 
                             
                              {/* logo image */}
         <div className='flex items-center'>
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1664711644/regiz.io_k42k2m.jpg" alt="logo" className="w-16"/>
            <h3 className="text-[#FEFEFF] text-3xl font-sans">Regiz</h3>
         </div>
        
         <ul className="hidden md:flex pr-4 uppercase gap-5 mx-5 text-black justify-center items-center flex'">
         <a><Link to="home"  smooth={true}  duration={500} class="line hover:text-[#66CC7B] text-[#FEFEFF] mb-2 no-underline	">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Home
                  </Link>
         </a>

         <a><Link to="about"  smooth={true}  duration={500} class="line hover:text-[#66CC7B] text-[#FEFEFF] no-underline	">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  About
                  </Link>
         </a>

         <div class="flex justify-center">
                <div>
                  <div class="dropdown relative">
                    <button
                      class="
                        dropdown-toggle
                        px-3
                        hover:text-[#66CC7B] text-[#FEFEFF]
                        link
                        font-medium
                        leading-tight
                        no-underline	
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex
                        mt-0
                        items-center
                        whitespace-nowrap
                      "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SERVICE
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      class="
                        dropdown-menu min-w-max absolute hidden
                        bg-white
                        cursor-pointer
                        text-base
                        z-50
                        float-left
                        py-2
                        list-none
                        text-left
                        rounded-lg
                        shadow-lg
                        mt-1
                        m-0
                        bg-clip-padding
                        border-none
                      "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                      <Link to="feature"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2
                            cursor-pointer
                            px-4
                            font-normal
                            block                           
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      Features
                      </Link>
                      </li>
                      
                      <li>
                      <Link to="benefit"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block                           
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      Benefit
                      </Link>
                      </li>                   
                    </ul>
                  </div>
                </div>
         </div> 

         <div class="flex justify-center">
                <div>
                  <div class="dropdown relative">
                    <button
                      class="
                        dropdown-toggle
                        px-3
                        hover:text-[#66CC7B] text-[#FEFEFF]
                        link
                        font-medium
                        leading-tight
                        no-underline	
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex
                        mt-0
                        items-center
                        whitespace-nowrap
                      "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      PAGES
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      class="
                        dropdown-menu
                        min-w-max
                        absolute
                        hidden
                        bg-white
                        cursor-pointer
                        text-base
                        z-50
                        float-left
                        py-2
                        list-none
                        text-left
                        rounded-lg
                        shadow-lg
                        mt-1
                        m-0
                        bg-clip-padding
                        border-none
                      "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                      <Link to="how"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            uppercase
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      How it works
                      </Link>
                      </li>
                      <li>
                      <Link to="Regiscoin"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            uppercase
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      Regiscoin
                      </Link>
                      </li>
                      <li>
                      <Link to="team"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      TEAM
                      </Link>
                      </li>
                      <li>
                      <Link to="persona"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2                            
                            uppercase
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      Persona
                      </Link>
                      </li>
                      <li>
                      <Link to="faq"  smooth={true}  duration={500} class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4                           
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          ">
                      FAQ
                      </Link>
                      </li>


                    </ul>
                  </div>
                </div>
         </div>     

         <a><Link to="roadmap"  smooth={true} offset={-100} duration={500} class="link hover:text-[#66CC7B] text-[#FEFEFF] no-underline">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  roadmap
                  </Link>
         </a>

         <a><Link to="contact"  smooth={true} offset={50} duration={500} class="link hover:text-[#66CC7B] text-[#FEFEFF] no-underline">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Contact
                  </Link>
         </a>

        {/* <Toggle/>          */}
         </ul>
        
              <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
          {!nav ? <AiOutlineMenu className="rounded-lg w-6 h-6 text-[#ffff] "/>  :  <AiOutlineClose className="w-6 h-6 text-[#FF1700]"/> }
              
            </div>

                                  {/* mobile navbar */}
                                  <ul className={!nav ? 'hidden' : 'absolute w-full px-8 mt-[390px] shadow-full cursor-pointer bg-[#FFFF] shadow '}>
              <div className='flex flex-col'>
                    <li className="w-full mb-3 text-[#000101] hover:bg-[#66CC7B] py-2 px-2 hover:text-white leading-6 text-base uppercase cursor-pointer"><a href='/'>Home</a></li>
                  
                    <li className="w-full mb-3 text-[#000101] hover:bg-[#66CC7B] py-2 px-2 hover:text-white leading-6 text-base uppercase"><Link onClick={handleClose} to="about"  smooth={true} offset={-50} duration={500}>About</Link></li>
                
                    <div class="w-full mb-3 text-[#000101] hover:bg-[#66CC7B] py-2 px-2 hover:text-white leading-6 text-base uppercase">
                          <div>
                            <div class="dropdown relative">
                              <button
                                class="
                                  dropdown-toggle
                                  px-3                         
                                  text-black
                                  font-medium
                                  leading-tight
                                  uppercase        
                                  transition
                                  duration-150
                                  ease-in-out
                                  flex
                                  hover:text-white
                                  mt-0
                                  items-center
                                  whitespace-nowrap
                                "
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                SERVICE
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="caret-down"
                                  class="w-2 ml-2"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 320 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                  ></path>
                                </svg>
                              </button>
                              <ul
                                class="
                                  dropdown-menu
                                  min-w-max
                                  absolute
                                  bg-white
                                  text-base
                                  z-50                        
                                  float-left
                                  py-2
                                  list-none
                                  text-left
                                  rounded-lg
                                  shadow-lg
                                  mt-1
                                  hidden
                                  m-0
                                  bg-clip-padding
                                  border-none
                                "
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                <Link onClick={handleClose} to="feature"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                    text-gray-700
                                    hover:bg-gray-100">Features
                                </Link>
                                  
                                </li>

                                <li>
                                <Link onClick={handleClose} to="benefit"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100">BENEFIT
                                </Link>
                                </li>                  
                              </ul>
                            </div>
                          </div>
                    </div>

                    <div class="w-full mb-3 text-[#000101] hover:bg-[#66CC7B] py-2 px-2 hover:text-white leading-6 text-base uppercase">
                          <div>
                            <div class="dropdown relative">
                              <button
                                class="
                                  dropdown-toggle
                                  px-3                         
                                  text-black
                                  font-medium
                                  leading-tight
                                  uppercase        
                                  transition
                                  duration-150
                                  ease-in-out
                                  flex
                                  hover:text-white
                                  mt-0
                                  items-center
                                  whitespace-nowrap
                                "
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                PAGES
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="caret-down"
                                  class="w-2 ml-2"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 320 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                  ></path>
                                </svg>
                              </button>
                              <ul
                                class="
                                  dropdown-menu
                                  min-w-max
                                  absolute
                                  bg-white
                                  text-base
                                  z-50                     
                                  float-left
                                  py-2
                                  list-none
                                  text-left
                                  rounded-lg
                                  shadow-lg
                                  mt-1
                                  hidden
                                  m-0
                                  bg-clip-padding
                                  border-none
                                "
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                <Link onClick={handleClose} to="Regiscoin"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      uppercase
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100">Regiscoin
                                </Link>

                                </li>
                                <li>
                                <Link onClick={handleClose} to="how"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      uppercase
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100">How it works
                                </Link>

                                </li>
                                <li>
                                <Link onClick={handleClose} to="team"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100">TEAM
                                </Link>

                                </li>

                                <li>
                                <Link onClick={handleClose} to="persona"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      uppercase
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100">Persona
                                </Link>

                                </li>

                                <li>
                                <Link onClick={handleClose} to="faq"  smooth={true} offset={-50} duration={500} class=" dropdown-item
                                      text-sm
                                      py-2
                                      uppercase
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100">FAQ
                                </Link>

                                </li> 
                              </ul>
                            </div>
                          </div>
                    </div>

                    <li className="w-full mb-3 text-[#000101] hover:bg-[#66CC7B] py-2 px-2 hover:text-white leading-6 text-base uppercase"><Link onClick={handleClose} to="roadmap" smooth={true} offset={-100} duration={500}>Roadmap</Link></li>
                    
                    <li className="w-full text-[#000101] hover:bg-[#66CC7B] py-2 px-2 hover:text-white leading-6 text-base uppercase"><Link onClick={handleClose} to="contact"  smooth={true} offset={50} duration={500}>Contact</Link></li>        
                 
              </div>

            </ul>
      </div>
    </div>
  )
}

export default Navbar