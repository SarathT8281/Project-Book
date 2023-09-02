import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddOrder() {
  const [ProductId, setProductId] = useState()
  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [ProductNo, setProductNo] = useState()
  const [Date, setDate] = useState()
 
  const Navigate=useNavigate()
    


  const Submitted = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3055/order',{ProductId,FirstName,LastName,ProductNo,Date})
    console.log(response);
    Navigate('/ordermain')
  }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center' >
      <div className='w-50 bg-white rounded p-3'>

        <form onSubmit={Submitted} >
          <h2>Add Orders</h2>
          <div className='mb-2'>
            <label htmlFor="">Product Id</label>
            <input type="text" placeholder='Enter  Product Id' className='form-control' onChange={(e)=>setProductId(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='Enter First Name' className='form-control'onChange={(e)=>setFirstName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Enter Last Name' className='form-control' onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Product No.</label>
            <input type="text" placeholder='Enter Product No.' className='form-control'onChange={(e)=>setProductNo(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Date</label>
            <input type="number" placeholder='Date' className='form-control'onChange={(e)=>setDate(e.target.value)} />
          </div>
           <button className='btn btn-success'>Add Orders</button>

        </form>



      </div>
     
     


    </div>
  )
}

export default AddOrder