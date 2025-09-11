import React from 'react'
import DashboardCard from '../../Components/admin/DashboardCard'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
<div className="bg-gray-100 p-8 rounded-2xl shadow-md text-center mb-8">
  <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
    Welcome back, Allu
  </h1>
  <p className="text-gray-500 text-lg mt-2">
    You received <span className="font-semibold text-blue-500">3</span> new applications today
  </p>

  <div className="mt-8 flex justify-center">
    <Link to="/manage">
      <button
        type="button"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200"
      >
        + Add Job
      </button>
    </Link>
  </div>
</div>


<div className='p-5'><DashboardCard /></div>




    </>
  )
}

export default Dashboard