import React from 'react'
import { useLocation } from 'react-router-dom'
import { HiBuildingOffice } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import JobOverviewCard from '../../Components/user/JobOverviewCard';

function JobDescription() {
  const location = useLocation();
  const job = location.state?.job; 

  if (!job) return <p className="text-center mt-10">No job selected!</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-5 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{job?.jobTitle}</h1>

        <div className="flex items-center text-gray-600 space-x-4">
          <p className="flex items-center gap-1"><HiBuildingOffice className="text-blue-600" /> {job?.companyname}</p>
          <p className="flex items-center gap-1"><IoLocationOutline className="text-blue-600" /> {job?.location} ({job?.worktype})</p>
          <p className="flex items-center gap-1"><CiCreditCard1 className="text-blue-600" /> Full-time</p>
        </div>

        <div className="mt-6 text-gray-700 space-y-4">
          <h2 className="text-xl font-semibold">About the Role</h2>
          <p>{job?.description}</p>

          <h2 className="text-xl font-semibold">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            {job?.responsibilities?.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold">Requirements / Qualifications</h2>
          <p>{job?.requirements}</p>

          <h2 className="text-xl font-semibold">Preferred Skills</h2>
          <ul className='list-disc list-inside space-y-1'>
            {job?.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold">Company Information</h2>
          <p>{job?.companyinfo}</p>
        </div>
      </div>

      <div className="lg:col-span-1">
        <JobOverviewCard />
      </div>
    </div>
  )
}

export default JobDescription;
