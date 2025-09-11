import React, { useState } from 'react'
import { addappliApi } from '../../Service/allApi'

function Jobapplypage() {
    const [addUser,setAddUser]=useState({
    phone:"",
   job:"",
    exp:"",
    curlocation:"",
  email:"",
  skill:"",
  portfolio:"",
  linkedin:"",
  file:"",
  coverletter:"",
  user:""
    })
    console.log(addUser);
    



const handleSubmit  = async()=>{
     const { user, curlocation, phone, exp, job, email, skill, file } = addUser;


if(!user||
    !curlocation ||
    !phone||
    !exp ||
    !job ||
  !email ||
  !skill ||
  
  !  file 
 
  ){
alert(`fill the form compeletely`)

}else{try {
        const result =await addappliApi(addUser)
        console.log(result);
        
       
        

        
      } catch (error) {
        console.log(error);
        
      }}

      
    }


    
  return (
   <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl font-medium">Apply for a Job</h1>
          <p className="text-gray-600">Fill in your details and upload your resume.</p>
        </header>

        <form
          className="rounded-2xl bg-white shadow p-6 md:p-8 "
          action="#"
          
        >
          {/* Contact Info */}
          <section>
            <h2 className="text-lg font-medium mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label  className=" text-sm font-medium">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                  onChange={(e)=>setAddUser({...addUser,user:e.target.value})}
                />
              </div>

              <div>
                <label  className=" text-sm font-medium">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,email:e.target.value})}
                />
              </div>

              <div>
                <label  className=" text-sm font-medium">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,phone:e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Current Location
                </label>
                <input
                 
                  type="text"
                  placeholder="City, Country"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,curlocation:e.target.value})}
                />
              </div>
            </div>
          </section>

          
          <section>
            <h2 className="text-lg font-medium mb-4">Role & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium">
                  Applying For<span className="text-red-500">*</span>
                </label>
                <input
                 
                  required
                  placeholder="Frontend Developer"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,job:e.target.value})}
                />
              </div>

              <div>
                <label  className=" text-sm font-medium">
                  Total Experience (years)
                </label>
                <input
                
                  type="number"
            
                  placeholder="0 - 10"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,exp:e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="" className=" text-sm font-medium">
                  Key Skills
                </label>
                <input
                  
            
                  type="text"
                  placeholder="skills"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,skill:e.target.value})}
                />
              </div>
            </div>
          </section>

         
          <section>
            <h2 className="text-lg font-medium mb-4">Links (Optional)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="portfolio" className=" text-sm font-medium">
                  Portfolio / Website
                </label>
                <input
                 
                  type="text"
                  placeholder="https://your-portfolio.com"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,portfolio:e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="linkedin" className=" text-sm font-medium">
                  LinkedIn
                </label>
                <input
                
                  type="text"
                  placeholder="https://linkedin.com/in/username"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,linkedin:e.target.value})}
                />
              </div>
            </div>
          </section>

        
          <section>
            <h2 className="text-lg font-medium mb-4">Resume & Cover Letter</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="resume" className=" text-sm font-medium">
                  Upload Resume (PDF/DOC)<span className="text-red-500">*</span>
                </label>
                <input
               
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="mt-1 block w-full text-sm file:mr-4 file:rounded-xl file:border-0 file:bg-blue-900 file:px-4 file:py-2 file:text-white hover:file:opacity-90"
                   onChange={(e)=>setAddUser({...addUser,file:e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium">
                  Cover Letter
                </label>
                <textarea
                  
                  rows={5}
                  placeholder="Briefly tell us why you're a great fit..."
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 "
                   onChange={(e)=>setAddUser({...addUser,coverletter:e.target.value})}
                />
              </div>

             
            </div>
          </section>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto rounded-xl bg-[#007BFF] px-6 py-3 text-white font-medium shadow hover:opacity-90 "
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        </form>

        
      </div>
    </div>
 
   
   
   
   </>
  
  )
}

export default Jobapplypage