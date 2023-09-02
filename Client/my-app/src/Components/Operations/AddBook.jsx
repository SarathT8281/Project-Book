import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import './Book.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function TableData() {
  const [Book, setBook] = useState("")
  const [Author, setAuthor] = useState("")

  const Navigate = useNavigate()


    const Submit=async (event)=>{
      event.preventDefault();
      const display=await axios.post('http://localhost:3055/book',{Book,Author})
      console.log(display.data);
      Navigate('/main')
  }

   
  return (
    <div className='header' >
      <form onSubmit={Submit}>
        <h3>Book Name</h3>
        <input type="text" onChange={(e)=>setBook(e.target.value)} />
        <h3>Author</h3>
        <input type="text" onChange={(e)=>setAuthor(e.target.value)} />
        <h3>Publications</h3>
        <input type="text" onChange={(e)=>setBook(e.target.value)} />
        <h3>Year</h3>
        <input type="number" onChange={(e)=>setBook(e.target.value)} />
        <h3>Price</h3>
        <input type="number" onChange={(e)=>setBook(e.target.value)} />
        <h3>Availability</h3>
        <input type="text" onChange={(e)=>setBook(e.target.value)} /> <br />
        <Button variant="primary" className="btn" onClick={Submit}>Add</Button>

        </form>


    </div>
  )
}

export default TableData