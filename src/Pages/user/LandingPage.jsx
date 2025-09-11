import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import microsoftlogo from '../../assets/microsoft_logo.svg'
import adobelogo from '../../assets/adobe_logo.png'
import amazonlogo from '../../assets/amazon_logo.png'
import accenturelogo from '../../assets/accenture_logo.png'
import walmartlogo from '../../assets/walmart_logo.svg'
import samsunglogo from '../../assets/samsung_logo.png'
import appstore from '../../assets/app_store.svg'
import playstore from '../../assets/play_store.svg'
import Navbar from '../../Components/Navbar';
import JobCard from '../../Components/user/JobCard';
import Footer from '../../Components/Footer';



function LandingPage({getJob,setGetJob}) {
        const [filterOpen, setFilterOpen] = useState(false)

    return (
        <>
            <Navbar />

            <div className='min-h-screen pt-20'>
                {/* Search Section */}
                <div className='flex justify-center pt-10 px-2'>
                    <div className='bg-linear-to-l from-green-900 via-purple-850 to-teal-400 h-76 w-full md:w-335 rounded-2xl'>
                        <div className='text-white pt-15 space-y-2'>
                            <h1 className='font-[500] text-2xl px-7 md:text-4xl text-center'>
                                Over 10,000+ jobs to apply
                            </h1>
                            <p className='text-center px-10 md:px-99 font-light text-[13px]'>
                                Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!
                            </p>
                        </div>
                        <div className='flex justify-center px-2 pt-5'>
                            <div className='px-2 mih-h-fit py-1 gap-2 flex justify-between overflow-hidden rounded items-center bg-white'>
                                <div className='px-2 items-center-safe md:gap-2 flex'>
                                    <IoIosSearch className='md:text-2xl text-gray-500' />
                                    <input className='outline-none text-[13px] md:text-[15px] w-25 md:w-29' placeholder='Search for jobs' type="text" />
                                </div>
                                <div className='items-center-safe gap-2 flex'>
                                    <IoIosSearch className='md:text-2xl text-gray-500' />
                                    <input className='outline-0 text-[13px] md:text-[15px] w-18' placeholder='Location' type="text" />
                                </div>
                                <div className='items-center-safe flex'>
                                    <button className='cursor-pointer bg-blue-700 hover:bg-blue-600 text-white text-m font-medium px-5 md:px-8 py-2 rounded'>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted Companies */}
                <div className='flex justify-center pt-5 px-2'>
                    <div className='shadow-xl py-5 px-5 border flex gap-10 border-gray-200 min-h-fit w-335 rounded-[5px]'>
                        <div>
                            <h1 className='font-[500] text-[1rem]'>Trusted By</h1>
                        </div>
                        <div className='items-center grid grid-cols-3 md:flex justify-center flex-wrap gap-10'>
                            <img className='w-20 md:w-22' src={microsoftlogo} alt="Microsoft" />
                            <img className='w-20 md:w-22' src={amazonlogo} alt="Amazon" />
                            <img className='w-20 md:w-22' src={accenturelogo} alt="Accenture" />
                            <img className='w-20 md:w-22' src={walmartlogo} alt="Walmart" />
                            <img className='w-20 md:w-22' src={samsunglogo} alt="Samsung" />
                            <img className='w-20 md:w-22' src={adobelogo} alt="Adobe" />
                        </div>
                    </div>
                </div>

                {/* Filters and Jobs */}
                <div className='md:flex mt-5 pb-10'>
                    {/* Filter toggle for mobile */}
                    <div className='px-5 md:px-15 md:hidden space-y-1.5 mt-10'>
                        <button onClick={() => setFilterOpen(!filterOpen)} className='border px-4 py-2 rounded'>
                            {filterOpen ? "Close" : "Filter"}
                        </button>
                    </div>

                    {/* Filters */}
                    <div className={filterOpen ? "" : 'max-lg:hidden'}>
                        <div className='px-5 md:px-15 space-y-1.5 mt-5 md:mt-10'>
                            <h1 className='text-xl font-medium'>Search by Categories</h1>
                            {["Programming", "Data Science", "Designing", "Networking", "Management", "Marketing", "Cyber Security"].map((cat) => (
                                <div key={cat} className='gap-1 flex'>
                                    <input type="radio" name="category" id={cat} />
                                    <label className='font-light' htmlFor={cat}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        <div className='px-5 md:px-15 space-y-1.5 mt-5'>
                            <h1 className='text-xl font-medium'>Search by Location</h1>
                            {["Banglore", "Washington", "Hyderabad", "Mumbai", "California", "Chennai", "New York"].map((loc) => (
                                <div key={loc} className='gap-1 flex'>
                                    <input type="radio" name="location" id={loc} />
                                    <label className='font-light' htmlFor={loc}>{loc}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Job Cards */}
                    <div className='md:mt-5 px-5 md:px-15 mt-10'>
                        <h1 className='text-xl font-medium'>Latest Jobs</h1>
                        <p>Get your desired job from top companies</p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                            <JobCard />
                        </div>

                        {/* Pagination */}
                        <div className='flex gap-2 mt-5 justify-center'>
                            {[1, 2, 3].map((num) => (
                                <button key={num} className='w-10 h-10 rounded border border-blue-600 bg-blue-50 text-blue-800 hover:bg-blue-400 hover:text-gray-500'>{num}</button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile App Section */}
                <div className='px-10 md:px-15 mt-10'>
                    <div className="border rounded-xl p-10 max-sm:flex max-sm:gap-5 max-sm:flex-col md:flex justify-around text-white min-h-fit min-w-fit bg-linear-to-l from-purple-950 via-purple-850 to-purple-700">
                        <div className='space-y-2'>
                            <h1 className='text-4xl font-extrabold'>Apply on the go</h1>
                            <p>Get real-time job updates on our App</p>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row max-sm:justify-center max-sm:gap-3 md:gap-2'>
                            <img className='max-sm:w-30 md:w-40' src={appstore} alt="App Store" />
                            <img className='max-sm:w-30 md:w-40' src={playstore} alt="Play Store" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default LandingPage