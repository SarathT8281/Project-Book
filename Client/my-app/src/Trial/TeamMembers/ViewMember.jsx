import React, { useEffect, useState } from 'react'
import './ViewMember.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ViewMember() {
    const [member, setMember] = useState([])
    const {memberId} = useParams()

    useEffect(() => {
      Change()
    }, [])
    

  const navigate= useNavigate()
  const Change = async () => {
  const response = await axios.get(`http://localhost:3055/getIds/${memberId}`)
  setMember(response.data)
   
  
}

  const submit=()=>{
    navigate('/membmain')
  }
 

  return (
    <div >
        
        <div class="card">
  <div class="card-header">
    <h3 class="card-title"> MEMBER DETAILS</h3>
  </div>
  <div class="card-body">
    <p class="card-content"> Name :{member.Name}</p>
    <p class="card-content"> Email :{member.Email}</p>
    <p class="card-content"> DOB  :{member.Dob}</p>
    <p class="card-content"> Gender :{member.Gender}</p>
    <p class="card-content"> Description :{member.Description}</p>
    <p class="card-content"> Role : {member.Role}</p>
    <p class="card-content"> Mobile : {member.Mobile}</p>
    <p class="card-content"> Profile : {member.Profile}</p>
    
    
  </div>
  <div class="card-footer">
    <button onClick={submit}  class="card-button">Back</button>
  </div>
</div>

    </div>
  )
}

export default ViewMember