import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'

import { getallvideos } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'

function View({uploadvideostatus}) {

const[allvideo,setallvideo]=useState([])  

const[deletevideostatus,setdeletevideostatus]=useState(false)


  const getalluploadedvideo=async()=>{
    const response=await getallvideos()
    // console.log(response);
    const{data}=response
    // console.log(data);
    setallvideo(data)

  }
  console.log(allvideo);
  
  useEffect(()=>{
    getalluploadedvideo()
    setdeletevideostatus(false)
  },[uploadvideostatus,deletevideostatus])
  return (
    <div>

      <Row>
        {
          allvideo.length>0?
          // this is a ternary operator
          allvideo.map((Video)=>(
       <Col sm={12} md={6} lg={4} xl={4}>
       <Videocard displayvideo={Video} setdeletevideostatus={setdeletevideostatus}/>
        </Col>))
        :
        <p>Nothing to display</p> 
}
      </Row>
      
    </div>
  )
}

export default View