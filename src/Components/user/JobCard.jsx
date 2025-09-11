import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({ job }) {
  return (
    <div className='shadow rounded pb-5 mt-5 py-5 min-w-fit min-h-fit'>
      <div className='px-5 py-2'>
        <h1 className='text-xl font-medium'>{job?.jobTitle}</h1>
        <div className='gap-2 items-center mt-2 flex'>
          <button className='bg-gray-100 text-gray-800 px-5 py-2 rounded-md  '>
            {job?.location}
          </button>
          <button className='bg-gray-100 text-gray-800 px-5 py-2 rounded-md '>
            {job?.experience}
          </button>
        </div>
        <p>{job?.requirements}</p>
        <p>{job?.salary}</p>
        <div className='gap-2 items-center mt-2 flex justify-between'>
          <Link to="/description" state={{ job }}>
            <button className='bg-[#00A896] text-white px-4 py-1 rounded-md hover:bg-white hover:text-[#00A896] border border-[#00A896] transition-colors duration-300'>
              Apply Now
            </button>
          </Link>

          <button className='border border-[#00A896] text-[#00A896] rounded px-4 py-1'>
            {job?.level || "Intermediate Level"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard;
