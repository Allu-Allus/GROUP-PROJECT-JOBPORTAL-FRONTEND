import React, { useEffect, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteApi, EditApi, getjobApi, UpdateApi } from '../../Service/allApi';


function ManageJob({ getJob, setGetJob }) {
  const [modal, setModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null);

  const getData = async () => {
    try {
      const result = await getjobApi()
      console.log(result);
      setGetJob(result.data)
    } catch (error) {
      console.log(error);

    }
  }

  const [del,setDel] = useState()

  const handlejobdlete = async (id) => {
    // console.log(id);
    try {
      const result = await deleteApi(id)
      console.log(result);
      setDel(result)

    } catch (error) {
      console.log(error);

    }

  }

// edit job data
const getEditData = async (id)=>{
  try {
    const result = await EditApi(id)
    console.log(result);
    if (result?.data) {
      setSelectedJob(result.data)
      setModal(true)
    }
    
  } catch (error) {
    console.log(error);
    
  }
 }

 // update

const handleUpdateJob = async(e)=>{
  e.preventDefault()
  try {
    const result = await UpdateApi(selectedJob.id,selectedJob)
    console.log(result);
    setModal(false)
    getData()
    
  } catch (error) {
    console.log(error);
    
  }
}
  useEffect(() => {
     getData() 

    }, [del])


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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  ms-10 mt-20">
        {getJob?.map((item) => (
          <div className="max-w-xs bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {item?.jobTitle}
              </h2>

              <p className="text-lg font-medium text-blue-600 mb-1">
                {item?.companyname}
              </p>

              <p className="text-sm text-gray-600 bg-gray-100 inline-block px-3 py-1 rounded-full mb-3">
                {item?.jobtype}
              </p>

              <p className="text-xl font-semibold text-green-600 mb-5">
                {item?.salary}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                // onClick={() => setModal(true)}
                 onClick={() => getEditData(item.id)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Edit
              </button>
              <button onClick={() => handlejobdlete(item.id)} className="flex-1 bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition-colors text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>









      {modal &&   <div
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
              <form className="grid grid-cols-2 gap-4" onSubmit={handleUpdateJob} >

                <input type="text" placeholder="Job Title" value={selectedJob?.jobTitle || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, jobTitle: e.target.value })}className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Company Name" value={selectedJob?.companyname || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, companyname: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Location" value={selectedJob?.location || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, location: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Work Type (Remote/Hybrid/Onsite)" value={selectedJob?.worktype || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, worktype: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Job Type (Full-time/Part-time)" value={selectedJob?.jobtype || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, jobtype: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Salary Range" value={selectedJob?.salary || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, salary: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Experience Level" value={selectedJob?.experience || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, experience: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="date" placeholder="Posted Date" value={selectedJob?.date || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, date: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="date" placeholder="Deadline" value={selectedJob?.dead || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, dead: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <input type="text" placeholder="Job ID"value={selectedJob?.jobid || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, jobid: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <textarea placeholder="About the Role"   value={selectedJob?.jobrole || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, jobrole: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                  
                <textarea placeholder="Responsibilities" value={selectedJob?.responsibilties || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, responsibilties: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />

                <textarea placeholder="Requirements / Qualifications"value={selectedJob?.requirements || ""} onChange={(e) =>setSelectedJob({ ...selectedJob, requirements: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
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