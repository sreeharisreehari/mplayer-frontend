import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deletevideohistory, getallhistory } from '../services/allAPI';
function Watchhistory() {
const [history,setHistory]=useState([])

  const allhistory=async()=>{
    const {data}= await getallhistory()
    // console.log(data);
    setHistory(data)
  }
   console.log(history);

const removehistory=async(id)=>{
  await deletevideohistory(id)
  allhistory()
}

   useEffect(()=>{allhistory()},[])
  return (
    <div className='container'>
      <div className='d-flex' style={{alignItems:"center",justifyContent:"space-between"}}>
        <h2>Watch History
          </h2>
          <Link to={'/home'} style={{textDecoration:"none"}}><h4 className='mt-5'><i class="fa-sharp fa-solid fa-arrow-left me-3"></i>Back to Home</h4>
  </Link>
      </div>
  <Table className='container'  striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>{
          history?.length>0?
          history?.map((item,index)=>( <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td><a href={item.embedlink}>{item.embedlink}?autoplay</a></td>
            <td>{item.timstamp}</td>
            <td> <button onClick={()=>removehistory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button></td>
          </tr>))


         
          :<p>nothing to display</p>}
          
          
        
          
        </tbody>
      </Table>
</div>

  )
}

export default Watchhistory