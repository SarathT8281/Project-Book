import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function UpdateOrders() {
    const {orderId} = useParams()
    const [ProductId, setProductId] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [ProductNo, setProductNo] = useState("")
    const [Date, setDate] = useState("")

   

    const navigate=useNavigate()
    useEffect(() => {
      change()
    }, [orderId])
    

    const change = async () => {
        const response = await axios.get(`http://localhost:3055/getIdd/${orderId}`)
        const {data} = response;       
         setProductId(data.ProductId)
        setFirstName(data.FirstName)
        setLastName(data.LastName)
        setProductNo(data.ProductNo)
        setDate(data.Date)
      }


      const updateDatamu = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3055/updateorder/${orderId}`,{ProductId,FirstName,LastName,ProductNo,Date})
            
            navigate('/ordermain')
        } catch (error) {
            console.log('Error on updating member : ',error);
        }
      }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center'>
    <div className='w-50 bg-white rounded p-3'>

      <form onSubmit={updateDatamu} >
        <h2>Edit Order</h2>
        <div className='mb-2'>
          <label htmlFor="">Product Id</label>
          <input type="text" placeholder='Enter  Product ID' className='form-control' value={ProductId} onChange={(e)=>setProductId(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder='Enter First Name' className='form-control' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder='Enter Last Name' className='form-control' value={LastName} onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Product No</label>
          <input type="number" placeholder='Enter Product No' className='form-control' value={ProductNo} onChange={(e)=>setProductNo(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Date</label>
          <input type="number" placeholder='Enter Date' className='form-control'value={Date} onChange={(e)=>setDate(e.target.value)} />
        </div>
        <Button type="submit" variant="primary">Save Changes</Button>

      </form>



    </div>
   
   </div>
  )
}

export default UpdateOrders