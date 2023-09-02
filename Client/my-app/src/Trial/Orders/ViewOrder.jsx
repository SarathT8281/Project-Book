import React, { useEffect, useState } from 'react'
// import './ViewMember.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ViewOrder() {
    const [order, setOrder] = useState([])
    const {orderId} = useParams()

    useEffect(() => {
      Change()
    }, [])
    

  const navigate= useNavigate()
  const Change = async () => {
  const response = await axios.get(`http://localhost:3055/getIdd/${orderId}`)
  setOrder(response.data)
   
  
}

  const submit=()=>{
    navigate('/ordermain')
  }
 

  return (
    <div >
        
        <div class="card">
  <div class="card-header">
    <h3 class="card-title"> ORDER DETAILS</h3>
  </div>
  <div class="card-body">
    <p class="card-content"> Product Id :{order.ProductId}</p>
    <p class="card-content"> Email :{order.FirstName}</p>
    <p class="card-content"> DOB  :{order.LastName}</p>
    <p class="card-content"> Gender :{order.ProductNo}</p>
    <p class="card-content"> Description :{order.Date}</p>
    
    
  </div>
  <div class="card-footer">
    <button onClick={submit}  class="card-button">Back</button>
  </div>
</div>

    </div>
  )
}

export default ViewOrder