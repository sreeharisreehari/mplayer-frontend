// import { serverURL } from "./serverURL"
// import { commonAPI } from "./commonAPI"



// // upload video
//  export const uploadvideo = async(reqBody)=>{
//    return await commonAPI("POST",`${serverURL}/video`,reqBody)
// }



import  {commonAPI}  from "./commonAPI"
import { serverURL } from "./serverURL"
// upload video

export const uploadVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/video`,reqBody)
}


// get all uploaded videos
 export const getallvideos=async()=>{
   return await commonAPI('GET',`${serverURL}/video`,"")
}
// to delete a video
export const deletevideos=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

// api to add history
export const addhistory=async(videodetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videodetails)
}

// api to get history from json-server
 export const getallhistory=async()=>{
  return await commonAPI('GET',`${serverURL}/history`,"")
 }

//  api to add category to json-server
export const addallcategory=async(body)=>{
   return await commonAPI('POST',`${serverURL}/categories`,body)
}

// api call to delete history
export const deletevideohistory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

// api to get all category
export const getallcategories=async()=>{
   return await commonAPI('GET',`${serverURL}/categories`,"")
}

// api to delete all categoriesv

export const deletecategory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

// api to get a particular video from  localhost
export const getAVideo=async(id)=>{
   return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}
// api to update the category with new videos
 export const updatecategory=async(id,body)=>
{
    return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}


