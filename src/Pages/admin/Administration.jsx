import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { getUserApi } from '../../Service/allApi';

function Administration() {
        const [userAdd,setUserAdd]=useState({
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
    console.log(userAdd);

    const [userjobData,setUserjobData] = useState()

    console.log(userjobData);
    

    const userjobs = async ()=>{
        try {
             const result = await getUserApi()
        console.log(result);
        console.log(result.data);
        setUserjobData(result.data)
        
        } catch (error) {
            console.log(error);
            
        }
       
        
    }

    useEffect(()=>{
       userjobs() 
    },[])
    
    return (
        <>
            <Navbar />
            <div className='p-30'>
                <div className='grid grid-cols-3 gap-5'>

                    {
                    userjobData?.map((item)=>(
                            <div className='min-h-fit rounded w-full shadow-2xl'>
                        <div className='px-5 py-5'>
                            <h1><span className='font-bold'>Name</span> : {item.user}</h1>
                            <h1><span className='font-bold'>Phone No</span> : {item.phone}</h1>
                            <h1><span className='font-bold'>Location</span> : {item.curlocation}</h1>
                            <h1><span className='font-bold'>Experience</span> : {item.exp}</h1>
                            <h1><span className='font-bold'>Applied For</span> : {item.job}</h1>
                            <div>
                                <a href=""> {item.file}</a>
                             
                            </div>
                            <div className='pt-5 px-5 flex justify-between'>
                                <button className='bg-yellow-50 text-yellow-500 border border-yellow-500 px-2 text-sm rounded'>ShortList</button>
                                <button className='bg-red-50 text-red-500 border border-yellow-500 px-2 text-sm rounded'>Reject</button>
                            </div>
                        </div>
                    </div>
                    ))     

                    }

                    

                </div>
            </div>
        </>
    )
}

export default Administration