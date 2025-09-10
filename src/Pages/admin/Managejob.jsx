import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';


function ManageJob() {
      const[modal,setModal]=useState(false)

  return (
    <>
   <div >
  <h1 className="text-center mt-10 text-4xl font-bold text-gray-800">
    Manage Jobs
  </h1>
  <div className='flex justify-end me-20'>
      <Link to={"/add"}>
        <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md flex text-center" 
                    >
                      add Job
                    </button>
    </Link>
  </div>
</div>

<div className="max-w-sm w-full bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl p-6 border border-gray-200 ms-20 mt-20 hover:shadow-2xl transition-shadow duration-300">
  <h2 className="text-2xl font-bold text-gray-900 mb-2">Frontend Developer</h2>

  <p className="text-lg font-medium text-blue-600 mb-1">TechCorp Pvt Ltd</p>

  <p className="text-sm text-gray-600 bg-gray-100 inline-block px-3 py-1 rounded-full mb-3">
    Full-time
  </p>

  <p className="text-xl font-semibold text-green-600 mb-5">
    ₹80,000 – ₹1,00,000
  </p>

  <div className="flex gap-3">
    <button
      onClick={() => setModal(true)}
      className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
    >
      Edit
    </button>
    <button className="flex-1 bg-red-600 text-white py-2.5 rounded-xl hover:bg-red-700 transition-colors">
      Delete
    </button>
  </div>
</div>





    
    
    {modal &&  <div
  id="dialog"
  aria-labelledby="dialog-title"
  className="fixed inset-0 overflow-y-auto bg-transparent backdrop:bg-transparent z-50"
>
  <div className="fixed inset-0 bg-gray-900/60 transition-opacity"></div>

  <div
    tabIndex={0}
    className="flex min-h-full items-center justify-center p-4 text-center focus:outline-none"
  >
    <div className="relative transform overflow-hidden rounded-2xl bg-gray-900 text-left shadow-2xl outline  outline-white/10 transition-all w-full max-w-5xl max-h-[90vh] flex flex-col">
      
      <div className="bg-gray-900 px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <h1 id="dialog-title" className="text-xl font-semibold text-white">
          Edit Job
        </h1>
        <button
          onClick={() => setModal(false)}
          className="text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
      </div>

      <div className="p-6 bg-white overflow-y-auto flex-1">
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Job Title" className="border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Company Name" className="border rounded-lg px-3 py-2 text-sm" />

          <input type="text" placeholder="Location" className="border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Work Type (Remote/Hybrid/Onsite)" className="border rounded-lg px-3 py-2 text-sm" />

          <input type="text" placeholder="Job Type (Full-time/Part-time)" className="border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Salary Range" className="border rounded-lg px-3 py-2 text-sm" />

          <input type="text" placeholder="Experience Level" className="border rounded-lg px-3 py-2 text-sm" />
          <input type="date" placeholder="Posted Date" className="border rounded-lg px-3 py-2 text-sm" />

          <input type="date" placeholder="Deadline" className="border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Job ID" className="border rounded-lg px-3 py-2 text-sm" />

          <textarea placeholder="About the Role" className="border rounded-lg px-3 py-2 text-sm" />
          <textarea placeholder="Responsibilities" className="border rounded-lg px-3 py-2 text-sm" />

          <textarea placeholder="Requirements / Qualifications" className="border rounded-lg px-3 py-2 text-sm" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
}
    </>
   
  )
}

export default ManageJob