import React from 'react'

function Myapplication() {


  
  return (
   <>
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
  <div className="mx-auto max-w-6xl">
    <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
      My Applied Jobs
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col gap-4 border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-700 text-lg font-bold">T</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Frontend Developer</h2>
            <p className="text-sm text-gray-500">TechCorp</p>
          </div>
        </div>

        <p className="text-sm text-gray-600">Applied: Aug 20, 2025</p>

        <span className="self-start px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
          In Review
        </span>
        <div className='flex justify-end-safe'>
          <button className="flex justify-center items-center bg-red-600 text-white py-2.5 rounded-xl hover:bg-red-700 transition-colors w-20">
        Delete
      </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col gap-4 border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-700 text-lg font-bold">D</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">UI/UX Designer</h2>
            <p className="text-sm text-gray-500">Designify</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Applied: Aug 15, 2025</p>
        <span className="self-start px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
          Shortlisted
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col gap-4 border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-700 text-lg font-bold">C</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Backend Engineer</h2>
            <p className="text-sm text-gray-500">CodeWorks</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Applied: Aug 10, 2025</p>
        <span className="self-start px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">
          Rejected
        </span>
      </div>

    </div>
  </div>
</div>

   
   </>
  
  )
}

export default Myapplication