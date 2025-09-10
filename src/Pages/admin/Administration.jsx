import React from 'react'
import Navbar from '../../Components/Navbar'

function Administration() {
    return (
        <>
            <Navbar />
            <div className='p-30'>
                <div className='grid grid-cols-3'>
                    <div className='min-h-fit rounded w-full shadow-2xl'>
                        <div className='px-5 py-5'>
                            <h1><span className='font-bold'>Name</span> : Pranav Mohanlal</h1>
                            <h1><span className='font-bold'>Phone No</span> : 8848062255</h1>
                            <h1><span className='font-bold'>Location</span> : Somewhere under the sky</h1>
                            <h1><span className='font-bold'>Company</span> : Aashirvad</h1>
                            <h1><span className='font-bold'>Position</span> : Travel Guide</h1>
                            <div>
                                Resume
                            </div>
                            <div className='pt-5 px-5 flex justify-between'>
                                <button className='bg-yellow-50 text-yellow-500 border border-yellow-500 px-2 text-sm rounded'>ShortList</button>
                                <button className='bg-red-50 text-red-500 border border-yellow-500 px-2 text-sm rounded'>Reject</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Administration