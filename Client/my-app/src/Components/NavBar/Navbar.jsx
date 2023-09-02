import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Navba() {
   const Navigate=useNavigate()
   const click=()=>{
    Navigate('/login')
   }
   const clikk=()=>{
    Navigate('/userlog')
   }


  return (
    <div>

<Navbar className='main'  data-bs-theme="dark" >
        <Container>
          <h1 className='head' href="#home">E-BOOKS</h1>
          <Nav className="me-auto">
          <button className='btn btn-primary bt'onClick={clikk} >Login</button>
            <button className='btn btn-primary bt' onClick={click}>Admin</button>
            <button className='btn btn-success bt'>Register</button>
          </Nav>
        </Container>
      </Navbar>
      <div className='bodi'>

        <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt="book img" />

      </div>


    </div>
  )
}

export default Navba