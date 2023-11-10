import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addallcategory, deletecategory, getAVideo, getallcategories, updatecategory } from '../services/allAPI';
import { Card } from 'react-bootstrap';
import Videocard from './Videocard';
import { Col, Row } from 'react-bootstrap'
function Category() {
  const [categoryname,setcategoryname]=useState("")
const[category,setcategory]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fuction to add category
  const addcategory=async()=>{
    console.log(categoryname);
    if(categoryname){
let body={
  categoryname,
  allvideo:[]
}
const response= await addallcategory(body)
console.log(response);
if(response.status>=200 && response.status<300){
  alert('category added successfully')
  // state value is made null
  setcategoryname("")
  // close the modal
  handleClose()
}
else{
  alert('something went wrong.pleade try again' )
}
    }
    else{
      alert('please enter category name')
    }

  }

  // function to get all categories
  const allcategory=async()=>{
    const {data}=await getallcategories()
    // console.log(data);
    setcategory(data)
    allcategory()
  }
  // console.log(category);

  // function to delete category
const deleteacategory=async(id)=>{
  await deletecategory(id)
  // to get the remaining categories
  allcategory()
}

// function 
const dragOver=(e)=>{
  e.preventDefault()
}

const videodrop=async(e,categoryid)=>{
  console.log('dropped on the category id:',categoryid);
  let videoid=e.dataTransfer.getData("videoID")
  console.log(videoid);
 const{data}= await getAVideo(videoid)
 console.log(data);
 const selectedcategory=category.find(item=>item.id===categoryid)
 selectedcategory.allvideo.push(data)
 console.log(selectedcategory);


await updatecategory(categoryid,selectedcategory)
allcategory()

}


  useEffect(()=>{
    allcategory()
  },[])
  return (
    <>
      <div className='d-grid ms-3'><button onClick={handleShow} className='btn btn-warning mt-3 mb-3'>Add New Category</button>
      </div>
      {category?.length>0?
      category?.map((item)=>(
      <div className='ms-5 border border-secondary p-3 rounded'>
        <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videodrop(e,item?.id)}>
          <h6>{item?.categoryname}</h6>
          <button onClick={()=>deleteacategory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button>

        </div>
        <Row>
          <Col>
          {item?.allvideo?.length> 0?
          item?.allvideo?.map(Card=>(<Videocard displayvideo={Card}/>))
          : <p>Nothing to display</p>}
          </Col>
        </Row>
      </div>))
      :<p className='ms-3 fw-bolder fs-5 text-danger'>No Category added</p>
}


      
      <Modal
   show={show}
   onHide={handleClose}
   backdrop="static"
   keyboard={false}
  >
   <Modal.Header closeButton>
     <Modal.Title>Add New Category</Modal.Title>
   </Modal.Header>
   <Modal.Body>
     <form className='border border-info p-3 rounded'>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setcategoryname(e.target.value)} />
        
      </Form.Group>

     </form>
   </Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Cancel
     </Button>
     <Button onClick={addcategory}  variant="primary">Add</Button>
   </Modal.Footer>
  </Modal>
 
    </>
  )
}

export default Category