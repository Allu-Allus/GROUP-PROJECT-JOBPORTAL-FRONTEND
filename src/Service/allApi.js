


import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"



// admin job add api

export const addJobApi = async (reqBody)=>{
    return await commonApi("post",`${serverURL}/adminaddjob`,reqBody)}

 // admin manage get api
    export const getjobApi = async ()=>{
    return await commonApi("get",`${serverURL}/adminaddjob`,"")

}

// add application  api
export const addappliApi = async (reqBody)=>{
    return await commonApi("post",`${serverURL}/userjob`,reqBody)}

 // user manage get api
    export const getUserApi = async ()=>{
    return await commonApi("get",`${serverURL}/userjob`,"")

}

//admin delete api
     export const deleteApi = async (id)=>{
    return await commonApi("delete",`${serverURL}/adminaddjob/${id}`,"")
     }