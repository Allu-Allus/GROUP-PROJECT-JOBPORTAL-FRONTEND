import React from 'react'

function Addjob() {
  return (
<>
<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
  <div className="bg-white shadow-2xl rounded-2xl max-w-4xl w-full p-8 border border-gray-200">
    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Job Details Form
    </h1>

    <form className="grid grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Job Title"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <input
        type="text"
        placeholder="Company Name"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />

      <input
        type="text"
        placeholder="Location"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <input
        type="text"
        placeholder="Work Type (Remote/Hybrid/Onsite)"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />

      <input
        type="text"
        placeholder="Job Type (Full-time/Part-time)"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <input
        type="text"
        placeholder="Salary Range"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />

      <input
        type="text"
        placeholder="Experience Level"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <input
        type="date"
        placeholder="Posted Date"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />

      <input
        type="date"
        placeholder="Deadline"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <input
        type="text"
        placeholder="Job ID"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />

      <textarea
        placeholder="About the Role"
        rows="3"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <textarea
        placeholder="Responsibilities"
        rows="3"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
      />
      <textarea
        placeholder="Requirements / Qualifications"
        rows="3"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50 col-span-2"
      />

      <div className="col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
        >
          ➕ Add Job
        </button>
      </div>
    </form>
  </div>
</div>


</>


)
}

export default Addjob