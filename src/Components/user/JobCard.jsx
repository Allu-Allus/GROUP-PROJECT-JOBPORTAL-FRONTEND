import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({ job }) {
    console.log(job);
    
  return (
    <div className='shadow rounded pb-5 mt-5 py-5 min-w-fit min-h-fit'>
      <div className='px-5 py-2'>
        <h1 className='text-xl font-medium'>{job?.jobTitle}</h1>
        <div className='gap-2 items-center mt-2 flex'>
          <button className='border text-sm font-light border-blue-500 bg-blue-50 rounded px-4 py-1'>
            {job?.location}
          </button>
          <button className='border text-sm font-light border-red-500 bg-red-50 rounded px-4 py-1'>
            {job?.experience}
          </button>
        </div>
        <p>{job?.requirements}</p>
         <p>{job?.salary}</p>
        <div className='gap-2 items-center mt-2 flex justify-between'>
          <Link to={"/description"}>
            <button className='bg-blue-500 text-white rounded px-4 py-1'>
              Apply Now
            </button>
          </Link>
          <button className='border text-slate-500 rounded px-4 py-1'>
            {job?.level || "Intermediate Level"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard