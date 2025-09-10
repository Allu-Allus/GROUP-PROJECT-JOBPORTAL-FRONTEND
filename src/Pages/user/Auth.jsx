import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AdminNav from '../../Components/user/AdminNav';

function Auth({login}) {
    return (
        <>
            <AdminNav login={login}  />
            <div className='min-h-screen w-full px-5 max-sm:pt-50 md:grid md:grid-cols-[2fr_3fr_2fr] items-center'>
                <div></div>

                <div className='shadow-2xl space-y-5 px-10 md:px-55 rounded-xl min-h-fit py-10 w-full'>
                    <div className='flex justify-center'>
                        <div className='text-5xl'><FaUser /></div>
                    </div>

                    <div className='flex justify-center'>
                        <h1 className='text-xl font-medium'>{login ? "Login" : "Register"}</h1>
                    </div>

                    {!login && (
                        <div className='flex flex-col justify-center'>
                            <input type="text" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Full Name' />
                        </div>
                    )}

                    <div className='flex flex-col justify-center'>
                        <input
                            type="text"
                            className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1'
                            placeholder={login ? 'Enter Email/Username' : 'Enter Email'}
                        />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <input type="password" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Password' />
                    </div>

                    {!login && (
                        <div className='flex flex-col justify-center'>
                            <input type="text" className='inset-shadow-2xs bg-slate-50 outline-0 rounded px-2 py-1' placeholder='Enter Phone Number' />
                        </div>
                    )}

                    <div className='flex justify-center'>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded'>
                            {login ? "Login" : "Register"}
                        </button>
                    </div>

                    <div>
                        {!login ? (
                            <span className='text-sm'>
                                Already a User? <Link to={"/login"}><button className='text-blue-500 cursor-pointer'>Login</button></Link>
                            </span>
                        ) : (
                            <span className='text-sm'>
                                Create New Account <Link to={"/register"}><button className='text-blue-500 cursor-pointer'>Register</button></Link>
                            </span>
                        )}
                    </div>
                </div>

                <div></div>
            </div>
        </>
    )
}

export default Auth