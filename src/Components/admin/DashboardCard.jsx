import React from 'react'

function DashboardCard() {
  return (
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Card 1 */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">Jobs Posted</h2>
    <p className="text-3xl font-extrabold text-blue-600">12</p>
    <p className="text-gray-500 mt-1 text-sm">Total jobs you have posted</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">Applications Received</h2>
    <p className="text-3xl font-extrabold text-green-600">34</p>
    <p className="text-gray-500 mt-1 text-sm">New applications today</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">Hired</h2>
    <p className="text-3xl font-extrabold text-purple-600">5</p>
    <p className="text-gray-500 mt-1 text-sm">Candidates successfully hired</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">Employers</h2>
    <p className="text-3xl font-extrabold text-orange-600">56</p>
    <p className="text-gray-500 mt-1 text-sm">Registered employers</p>
  </div>
</div>

    </>
  )
}

export default DashboardCard