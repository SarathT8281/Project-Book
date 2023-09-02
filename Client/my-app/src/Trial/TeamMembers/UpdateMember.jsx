import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function UpdateMember() {
    const {memberId} = useParams()
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Dob, setDob] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Profile, setProfile] = useState("")

    

    const navigate=useNavigate()
    useEffect(() => {
      change()
    }, [memberId])
    
    const change = async () => {
        
        const response = await axios.get(`http://localhost:3055/getIds/${memberId}`)
        const {data} = response;       
         setName(data.Name)
        setEmail(data.Email)
        setDob(data.Dob)
        setGender(data.Gender)
        setDescription(data.Description)
        setRole(data.Role)
        setMobile(data.Mobile)
        setProfile(data.Profile)
        
      }


      const updateDatamb = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3055/updatemember/${memberId}`,{Name,Email,Dob,Gender,Description,Role,Mobile,Profile})
            
            navigate('/membmain')
        } catch (error) {
            console.log('Error on updating member : ',error);
        }
      }

      

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center'>
    <div className='w-50 bg-white rounded p-3'>

      <form onSubmit={updateDatamb} >
        <h2>Edit Member</h2>
        <div className='mb-2'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter  Name' className='form-control' value={Name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter Email' className='form-control' value={Email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">DOB</label>
          <input type="text" placeholder='Enter DOB' className='form-control' value={Dob} onChange={(e)=>setDob(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Gender</label>
          <input type="number" placeholder='Enter Gender' className='form-control' value={Gender} onChange={(e)=>setGender(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Description</label>
          <input type="number" placeholder='Enter Description' className='form-control'value={Description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Role</label>
          <input type="text" placeholder='Enter Role' className='form-control' value={Role} onChange={(e)=>setRole(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Mobile</label>
          <input type="text" placeholder='Enter Mobile' className='form-control' value={Mobile} onChange={(e)=>setMobile(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Profile</label>
          <input type="text" placeholder='Enter Profile' className='form-control' value={Profile} onChange={(e)=>setProfile(e.target.value)} />
        </div>
        <Button type="submit" variant="primary">Save Changes</Button>






      </form>



    </div>
   
   </div>
  )
}

export default UpdateMember