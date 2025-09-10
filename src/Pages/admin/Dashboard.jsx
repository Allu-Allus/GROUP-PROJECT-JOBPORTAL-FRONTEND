import React from 'react'
import DashboardCard from '../../Components/admin/DashboardCard'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
     <div className="text-center bg-gray-100 p-4 rounded shadow mb-4">
  <h1 className="text-4xl font-bold text-blue-600">Welcome back, Allu</h1>
  <h5 className="text-gray-500 text-lg">You received 3 new applications today</h5>
</div>

<DashboardCard/>

<div className="flex justify-end mt-20 me-10">
<Link to={"/manage"}>
    <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md flex text-center" 
                >
                  add Job
                </button>
</Link>
</div>
    </>
  )
}

export default Dashboard