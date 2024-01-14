import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonStructure";

export const companyRegisterApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/company/register`, body, "")
}

export const companyLoginApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/company/login`, body, "")
  }

export const addJobApi = async (data, header) => {
    return await commonApi('POST', `${BASE_URL}/company/addjob`, data, header)
  }
  export const getCompanyJobApi = async (header) => {
    return await commonApi('GET', `${BASE_URL}/company/getJobDetails`, "",header)
  }
 
  export const editJobApi=async( id,header, body)=>{
    return await  commonApi('PUT',`${BASE_URL}/company/job/edit/${id}`,body, header)
  }
  export const deleteJobApi = async (_id) => {
    return await commonApi('DELETE', `${BASE_URL}/user/delete-jobpost/${_id}`, {})
  }

  export const userRegisterApi = async (header,data) => {
    return await commonApi('POST', `${BASE_URL}/user/register`, data, header)
  }
  export const userLoginApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/user/login`, body, "")
  }
  export const userDetailsApi = async (header) => {
    return await commonApi('GET', `${BASE_URL}/user/details`,"", header)
  }
  export const getAllJobApi = async (header,searchData) => {
    return await commonApi('GET', `${BASE_URL}/user/all/company/job?search=${searchData}`, "",header)
  }
  export const get4JobsApi = async () => {
    return await commonApi('GET', `${BASE_URL}/user/get-limited-jobs`, "", "")
  }
  export const applyJobApi = async (header,data) => {
    return await commonApi('POST', `${BASE_URL}/user/apply/job`, data, header) //CORRECTED URL
  }