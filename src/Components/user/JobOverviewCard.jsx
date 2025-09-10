import React from 'react'
import { Link } from 'react-router-dom'

function JobOverviewCard() {
  return (
    <>
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
  <div className="p-6 flex flex-col justify-between h-full">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Overview</h1>
    
    <div className="space-y-3 text-gray-700">
      <p><span className="font-semibold text-gray-800">Salary:</span> ₹80,000 - ₹1,00,000</p>
      <p><span className="font-semibold text-gray-800">Experience:</span> Experienced</p>
      <p><span className="font-semibold text-gray-800">Posted:</span> 1 day ago</p>
      <p><span className="font-semibold text-gray-800">Deadline:</span> Sep 5, 2025</p>
      <p><span className="font-semibold text-gray-800">Job ID:</span> 1245</p>
    </div>

     
       <Link to={"/application"}>
          <button className="mt-6 w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Apply Now 
          </button>
       </Link>
     
   
  </div>
</div>
    </>
  )
}

export default JobOverviewCard