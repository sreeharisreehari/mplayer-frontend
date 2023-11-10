import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const[uploadvideostatus,setuploadvideostatus]=useState({})
  return (
    <>
    <div className='container'><Add setuploadvideostatus={setuploadvideostatus}/></div>
    <div className='container'>
      <div className='d-flex container' style={{alignItems:"center",justifyContent:"space-between"}}>  
      <div className='col-lg-9'>
      
      <h2>All Videos</h2>
<View uploadvideostatus={uploadvideostatus}/>

      </div>
      <div className='col-lg-3'>
      
<Category/>
</div>
      </div>
      
    </div>
    
    </>
  )
}

export default Home