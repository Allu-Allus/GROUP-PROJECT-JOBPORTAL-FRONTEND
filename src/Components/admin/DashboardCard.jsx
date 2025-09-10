import React from 'react'

function DashboardCard() {
  return (
    <>

        <div className="flex flex-col md:flex-row gap-4">
  {/* card 1 */}
  <div className="bg-white p-6 rounded-2xl shadow-md flex-1 text-center">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">Jobs Posted</h2>
    <p className="text-3xl font-bold text-blue-600">12</p>
    <p className="text-gray-500 mt-1">Total jobs you have posted</p>
  </div>

  {/* card 2 */}
  <div className="bg-white p-6 rounded-2xl shadow-md flex-1 text-center">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">Applications Received</h2>
    <p className="text-3xl font-bold text-green-600">34</p>
    <p className="text-gray-500 mt-1">New applications today</p>
  </div>

  {/* card 3 */}
  <div className="bg-white p-6 rounded-2xl shadow-md flex-1 text-center">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">Hired</h2>
    <p className="text-3xl font-bold text-purple-600">5</p>
    <p className="text-gray-500 mt-1">Candidates successfully hired</p>
  </div>
</div>
    </>
  )
}

export default DashboardCard