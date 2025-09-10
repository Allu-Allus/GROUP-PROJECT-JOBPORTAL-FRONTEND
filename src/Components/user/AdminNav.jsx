import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { IoIosMenu } from "react-icons/io";

function AdminNav({login}) {
       const Navigate = useNavigate()
    const [menu, setMenu] = useState(false)
  return (
    <>
         <div className='min-h-fit w-full fixed px-5 md:px-20 py-4 shadow-2xs'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img 
                            onClick={() => Navigate("/")} 
                            className='w-35 md:w-50 cursor-pointer' 
                            src={logo} 
                            alt="Logo" 
                        />
                    </div>

                    <div className='items-center'>
                        {/* Mobile menu button */}
                        <button 
                            onClick={() => setMenu(!menu)} 
                            className='text-2xl items-center md:hidden'
                        >
                            <IoIosMenu />
                        </button>

                        {/* Desktop links */}
                        <div className='hidden md:flex gap-5'>
                            <button  
                                onClick={() => Navigate("/login-job")} 
                                className='cursor-pointer text-sm md:text-m text-gray-600'
                            >
                                Recruiter Login
                            </button>
                            {!login && (
                                <Link to={"/login"}>
                                    <button className='cursor-pointer bg-blue-600 text-white text-m font-medium px-8 py-2 rounded-3xl'>
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {menu && (
                    <div className='flex md:hidden justify-center pt-2 gap-20'>
                        <button 
                            onClick={() => Navigate("/login-job")} 
                            className='cursor-pointer text-sm md:text-m text-gray-600'
                        >
                            Recruiter Login
                        </button>
                        {!login && (
                            <Link to={"/login"}>
                                <button className='cursor-pointer bg-blue-600 text-white text-sm font-medium px-8 py-1 rounded-3xl'>
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
    </>
  )
}

export default AdminNav