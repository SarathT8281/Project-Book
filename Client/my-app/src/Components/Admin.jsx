import React, { useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




function Login() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [errorMsg, seterrorMsg] = useState("")

    const navigate = useNavigate();

    const handleFName =(event)=>{
      setFirstName(event.target.value)
    }
    const handleLName =(event)=>{
      setLastName(event.target.value)
  }
  const handleEmail =(event)=>{
    setEmail(event.target.value)
}
    const handlePassword= (event)=>{
      setPassword(event.target.value)
    }
    const handleSubmit=async (event) => {
      try {
        const display=await axios.post('http://localhost:3055/login',{FirstName,LastName,Email,Password})
        console.log(display.data);
        console.log("Name :",FirstName);
        console.log("Password :",Password);
        navigate('/sidebar')
      } catch (error) {
          console.log('Error on passing data');
          seterrorMsg('Invalid Email Or Password')
        
      }
    }
    

  return (
     
    
    <div >
         <form  method='post'>
        <div className='cover'>
          <p style={{color:'red',fontSize:'large'}}>{errorMsg}</p>
        <h1>Admin</h1>

        
        
        {/* <input className='input' type="text" placeholder='First name' value={FirstName} onChange={handleFName} />
        <input className='input' type="text" placeholder='Last Name' value={LastName} onChange={handleLName} /> */}
        <input className='input' type="text" placeholder='Email' value={Email} onChange={handleEmail} />
        <input className='input' type="password" placeholder='Password'value={Password} onChange={handlePassword}  />
        <Button  variant="primary" onClick={handleSubmit}>Submit</Button>
        <a className='fp' href="#">Forgot Password</a>
        
        

     </div>
     
     </form>


    </div>
  )
}

export default Login