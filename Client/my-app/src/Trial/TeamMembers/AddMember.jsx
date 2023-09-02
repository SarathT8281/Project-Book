import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMember() {
  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Dob, setDob] = useState()
  const [Gender, setGender] = useState()
  const [Description, setDescription] = useState()
  const [Role, setRole] = useState()
  const [Mobile, setMobile] = useState()
  const [Profile, setProfile] = useState()

  const Navigate=useNavigate()
    


  const Submit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3055/member',{Name,Email,Dob,Gender,Description,Role,Mobile,Profile})
    console.log(response);
    Navigate('/membmain')
  }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center' >
      <div className='w-50 bg-white rounded p-3'>

        <form onSubmit={Submit} >
          <h2>Add Books</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter  Name' className='form-control' onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control'onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">DOB</label>
            <input type="number" placeholder='Enter DOB' className='form-control' onChange={(e)=>setDob(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Gender</label>
            <input type="text" placeholder='Enter Gender' className='form-control'onChange={(e)=>setGender(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Description</label>
            <input type="text" placeholder='Enter Description' className='form-control'onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Role</label>
            <input type="text" placeholder='Enter Role' className='form-control' onChange={(e)=>setRole(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Mobile</label>
            <input type="number" placeholder='Enter Mobile Number' className='form-control' onChange={(e)=>setMobile(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Profile</label>
            <input type="text" placeholder='Enter Profile' className='form-control' onChange={(e)=>setProfile(e.target.value)} />
          </div>
          <button className='btn btn-success'>Add Team Member</button>






        </form>



      </div>
     
     


    </div>
  )
}

export default AddMember