import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi2";
import Swal from 'sweetalert2';



function OrderHome() {
    const [Order, setOrder] = useState([])
    


        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3055/getorder')
                setOrder(response.data)
                console.log(response.data);
            } catch (error) {
                console.log("Error on fetching data : ",error);
            }
          
            
         }
      
      fetchData()
    
    const Navigation= useNavigate()

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:3055/deleteorder/${id}`);
          console.log('Member deleted successfully!');
          fetchData();
          Swal.fire({
            title: 'Warning!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Yes'
          })
        } catch (error) {
          console.log('Error deleting member: ', error);
        }
      };
    
    
      const views=(orderId)=>{
        Navigation(`/vieworder/${orderId}`)
    }
    
   
    
    const Updation=(orderId)=>{
        Navigation(`/updateorder/${orderId}`)
    }
   

    
  return (
   
    <div className='all' >
        <div  >
            <h1>ORDER DETAILS</h1>
            <table className='table'>
                <thead className='hed'>
                    <tr>
                        <th>ProductId</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Product No.</th>
                        <th>Date</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                        
          
                    </tr>
                </thead>
                <tbody className='rows'>
                    {
                        Order.map((obj)=>(
                        
                            <tr>
                                <td>{obj.ProductId}</td>
                                <td>{obj.FirstName}</td>
                                <td>{obj.LastName}</td>
                                <td>{obj.ProductNo}</td>
                                <td>{obj.Date}</td>
                               
                                
                                <td> <a onClick={()=>views(obj._id)} > <HiEye size={20} color="blue"  /></a>  </td>
                              <td > 
                              <a className='icon' onClick={()=>Updation(obj._id)} > <BsFillPencilFill  size={20} color="green"/>  </a>  </td>
                              <td><a onClick={(e)=>handleDelete(obj._id)} > <MdDelete size={20} color="red" />   </a> 
                               </td> 
                            
                            </tr>
                            
                        ))
                    }


                </tbody>

            </table>

        </div>






    </div>
  )
}

export default OrderHome