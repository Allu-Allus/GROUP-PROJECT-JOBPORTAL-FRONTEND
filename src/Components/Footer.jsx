import React from 'react'
import logo from '../assets/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='grid md:grid-cols-4 p-5 shadow-2xl bg-slate-100 mt-10'>
            <div className='flex flex-col gap-5 p-2'>
                <div><img src={logo} alt="" /></div>
                <div>
                    <div className='max-sm:hidden'>
                        <h1 className='font-medium text-xl pb-2'>Connect With Us</h1>
                        <div className='flex gap-2 text-2xl text-gray-500'>
                            <FaInstagram className='hover:text-blue-400' />
                            <FaFacebookSquare className='hover:text-blue-400'/>
                            <FaSquareXTwitter className='hover:text-blue-400'/>
                            <FaLinkedin className='hover:text-blue-400'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-2 space-y-0.5'>
                <li className='list-none hover:text-blue-500 cursor-pointer'>About Us</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Careers</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Employer home</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Sitemap</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Credits</li>
            </div>
            <div className='p-2 space-y-0.5'>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Help center</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Summons/Notices</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Grievances</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Report issue</li>
            </div>
            <div className='p-2 space-y-0.5'>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Privacy policy</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Terms & conditions</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Fraud alert</li>
                <li className='list-none hover:text-blue-500 cursor-pointer'>Trust & safety</li>
            </div>
           <div className='md:hidden'>
                <h1 className='font-medium  text-xl pb-2'>Connect With Us</h1>
                        <div className='flex gap-2 text-2xl text-gray-500'>
                            <FaInstagram />
                            <FaFacebookSquare />
                            <FaSquareXTwitter />
                            <FaLinkedin />
                        </div>
           </div>
        </div>
    </>
  )
}

export default Footer