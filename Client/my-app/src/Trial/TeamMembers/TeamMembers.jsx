import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi2";
import Swal from 'sweetalert2';



function TeamMembers() {
    const [Member, setMember] = useState([])
    


        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3055/getmember')
                setMember(response.data)
                console.log(response.data);
            } catch (error) {
                console.log("Error on fetching data : ",error);
            }
          
            
         }
      
      fetchData()
    
    const Navigation= useNavigate()

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:3055/deletes/${id}`);
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
    
    
      const view=(memberId)=>{
        Navigation(`/viewmember/${memberId}`)
    }
    
   
    
    const Updat=(memberId)=>{
        Navigation(`/updatemember/${memberId}`)
    }
   

    
  return (
   
    <div className='all' >
        <div  >
            <h1>TEAM MEMBERS</h1>
            <table className='table'>
                <thead className='hed'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Description</th>
                        <th>Role</th>
                        <th>Mobile</th>
                        <th>Profile</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
          
                    </tr>
                </thead>
                <tbody className='rows'>
                    {
                        Member.map((obj)=>(
                        
                            <tr>
                                <td>{obj.Name}</td>
                                <td>{obj.Email}</td>
                                <td>{obj.Dob}</td>
                                <td>{obj.Gender}</td>
                                <td>{obj.Description}</td>
                                <td>{obj.Role}</td>
                                <td>{obj.Mobile}</td>
                                <td>{obj.Profile}</td>
                                
                                <td> <a onClick={()=>view(obj._id)} > <HiEye size={20} color="blue"  /></a>  </td>
                              <td > 
                              <a className='icon' onClick={()=>Updat(obj._id)} > <BsFillPencilFill  size={20} color="green"/>  </a>  </td>
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

export default TeamMembers