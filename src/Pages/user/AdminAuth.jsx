import React from 'react'
import { MdCorporateFare } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AdminAuthNav from '../../Components/user/AdminAuthNav'


function AdminAuth({login}) {
  return (
    <>
     <AdminAuthNav login/>
      <div className='min-h-screen w-full px-5 max-sm:pt-50  md:grid md:grid-cols-[2fr_3fr_2fr] items-center'>
            <div></div>
            <div className='shadow-2xl space-y-5 px-10 md:px-55 rounded-xl min-h-fit py-10 w-full'>
                    <div className='flex justify-center'>
                        <div className='text-5xl'><MdCorporateFare/></div>
                    </div>
                    <div className='flex justify-center'>
                       {!login ? <h1 className='text-xl font-meduim'>Register</h1>:
                        <h1 className='text-xl font-meduim'>Login</h1>}
                    </div>
                   {!login && <div className='flex flex-col justify-center'>
                        <input type="text" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Company Name' />
                    </div>}
                    
                    {login && <div className='flex flex-col justify-center'>
                        <input type="text" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Email/Username' />
                    </div>}
                   {!login && <div className='flex flex-col justify-center'>
                        <input type="text" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Company Email' />
                    </div>}
                     <div className='flex flex-col justify-center'>
                        <input type="password" className='bordinset-shadow-2xs bg-slate-50  outline-0 rounded px-2 py-1' placeholder='Enter Password' />
                    </div>
                    {!login && <div className='flex flex-col justify-center'>
                        <input type="text" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Phone Number' />
                    </div>}
                    <div className='flex justify-center'>
                        {login ? <Link to={"/dash"}><button className='bg-blue-500 text-white px-3 py-1 rounded'>Login</button></Link> :
                        <button className='bg-blue-500 text-white px-3 py-1 rounded'>Register</button>}
                    </div>
                   
                    <div >
                       {!login ? <span className='text-sm'>Already a User <Link to={"/login-job"}><button className='text-blue-500 cursor-pointer'>Login</button></Link></span>:
                       <span className='text-sm'>Create New Account <Link to={"/register-job"}><button className='text-blue-500 cursor-pointer' >Register</button></Link></span>}
                    </div>
                    
            </div>
            <div></div>
        </div>
    </>
  )
}

export default AdminAuth