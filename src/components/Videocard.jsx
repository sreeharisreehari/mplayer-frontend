import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addhistory, deletevideos } from '../services/allAPI';
function Videocard({displayvideo,setdeletevideostatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);

const{caption,embedlink}=displayvideo

let today=new Date()
console.log(today);
let timstamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
console.log(timstamp);

let videodetails={caption,embedlink,timstamp}
await addhistory(videodetails)
  }



   const removevideo=async(id)=>{
    const response=await deletevideos(id)
    setdeletevideostatus(true)
   }

    // function to drag videocard
    const cardrag=(e,id)=>{
      console.log(`the id of thevideocard dragged is ${id}`);
      e.dataTransfer.setData("videoID",id)
    }
   
  return (
    <div><Card style={{ width: '18rem' }} draggable onDragStart={(e)=>cardrag(e,displayvideo?.id)}>
    <Card.Img variant="top" onClick={handleShow} src={displayvideo.url}  />
    <Card.Body>
      <Card.Title style={{alignItems:"center",display:"flex",justifyContent:"space-between"}}>
<h4>
{displayvideo.caption} 
</h4>      <button onClick={()=>removevideo(displayvideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button>
      </Card.Title> </Card.Body>
  </Card>
  <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300" src={`${displayvideo.embedlink}?autoplay=1`} title={displayvideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>

  
  </div>
  )
}

export default Videocard
