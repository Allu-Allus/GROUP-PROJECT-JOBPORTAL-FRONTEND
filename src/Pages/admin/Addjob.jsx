import React from 'react'
import { addJobApi } from '../../Service/allApi';
import { Link, useNavigate } from 'react-router-dom';

function Addjob({jobData,setJobData}) {
const navigate = useNavigate()

    console.log(jobData);



    
    


    const {
        jobTitle,
    location,
    jobtype,
    experience,
    dead,
  jobrole,
  requirements,
  companyname,
  jobid,
  responsibilties,
  worktype,
  salary
    }=jobData



const handleAdd= async()=>{


if(!jobTitle ||
    !location ||
    !jobtype ||
    !experience ||
    !dead ||
  !jobrole ||
  !requirements ||
  !companyname ||
  !jobid ||
  !responsibilties ||
 !worktype ||
  !salary){
alert(`fill the form compeletely`)

}else{try {
        const result =await addJobApi(jobData)
        console.log(result);
        setJobData(result.data)
       
        

        
      } catch (error) {
        console.log(error);
        
      }}

      
    }

console.log(jobData);








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
        onChange={(e)=>setJobData({...jobData,jobTitle:e.target.value})}
      />
      <input
        type="text"
        placeholder="Company Name"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
         onChange={(e)=>setJobData({...jobData,companyname:e.target.value})}
      />

      <input
        type="text"
        placeholder="Location"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
         onChange={(e)=>setJobData({...jobData,location:e.target.value})}
      />
      <input
        type="text"
        placeholder="Work Type (Remote/Hybrid/Onsite)"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
         onChange={(e)=>setJobData({...jobData,worktype:e.target.value})}
      />

      <input
        type="text"
        placeholder="Job Type (Full-time/Part-time)"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                 onChange={(e)=>setJobData({...jobData,jobtype:e.target.value})}
      />
      <input
        type="text"
        placeholder="Salary Range"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                 onChange={(e)=>setJobData({...jobData,salary:e.target.value})}

      />

      <input
        type="text"
        placeholder="Experience Level"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                 onChange={(e)=>setJobData({...jobData,experience:e.target.value})}

      />
      <input
        type="date"
        placeholder="Posted Date"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                 onChange={(e)=>setJobData({...jobData,dead:e.target.value})}

      />

      <input
        type="date"
        placeholder="Deadline"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                 onChange={(e)=>setJobData({...jobData,dead:e.target.value})}

      />
      <input
        type="text"
        placeholder="Job ID"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                         onChange={(e)=>setJobData({...jobData,jobid:e.target.value})}

      />

      <textarea
        placeholder="About the Role"
        rows="3"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                         onChange={(e)=>setJobData({...jobData,jobrole:e.target.value})}

      />
      <textarea
        placeholder="Responsibilities"
        rows="3"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50"
                         onChange={(e)=>setJobData({...jobData,responsibilties:e.target.value})}

      />
      <textarea
        placeholder="Requirements / Qualifications"
        rows="3"
        className="border rounded-lg px-4 py-2.5 text-sm bg-gray-50 col-span-2"
                         onChange={(e)=>setJobData({...jobData,requirements:e.target.value})}

      />

      <div className="col-span-2 flex justify-end">
       <Link to={"/manage"}>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
              onClick={handleAdd}
              
            >
              ➕ Add Job
            </button>
       </Link>
      </div>
    </form>
  </div>
</div>


</>


)
}

export default Addjob