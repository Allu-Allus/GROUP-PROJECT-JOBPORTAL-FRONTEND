import React from 'react'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom'

function JobCard() {
    return (
        <>
            <div className='shadow rounded pb-5 mt-5 py-5 min-w-fit min-h-fit'>
                {/* <img className='w-13 pt-5 ps-5' src={google} alt="" /> */}
                <div className='px-5 py-2'>
                    <h1 className='text-xl font-medium'>Cloud Engineer</h1>
                    <div className='gap-2 items-center mt-2 flex'>
                        <button className='border text-sm font-light border-blue-500 bg-blue-50 backdrop-opacity-5 rounded px-4 py-1'>
                            Hyderabad
                        </button>
                        <button className='border text-sm font-light border-red-500 bg-red-50 rounded px-4 py-1'>
                            Intermediate Level
                        </button>
                    </div>
                    <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
                    <div className='gap-2 items-center mt-2 flex justify-between'>


                        <Link to={"/description"}>
                            <button className='bg-blue-500 text-white backdrop-opacity-5 rounded px-4 py-1'>
                                Apply Now
                            </button>
                        </Link>


                        <button className=' border text-slate-500 rounded px-4 py-1'>
                            Intermediate Level
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobCard