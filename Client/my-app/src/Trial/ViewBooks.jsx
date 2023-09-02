import React, { useEffect, useState } from 'react'
import './ViewBooks.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ViewBooks() {
    const [book, setBooks] = useState([])
    const {bookId} = useParams()

    useEffect(() => {
      Change()
    }, [])
    

  const navigate= useNavigate()
  const Change = async () => {
  const response = await axios.get(`http://localhost:3055/getId/${bookId}`)
  setBooks(response.data)
   
  
}
   
  const submit=()=>{
    navigate('/main')
  }
 

  return (
    <div >
        
        <div class="card">
  <div class="card-header">
    <h3 class="card-title"> BOOK DETAILS</h3>
  </div>
  <div class="card-body">
    <p class="card-content">Book Name :{book.BookName}</p>
    <p class="card-content">Author Name :{book.Author}</p>
    <p class="card-content">Publications Name :{book.PublicationsName}</p>
    <p class="card-content">Year :{book.Year}</p>
    <p class="card-content">Price:{book.Price}</p>
    <p class="card-content">Availability : {book.Availability}</p>
    
  </div>
  <div class="card-footer">
    <button onClick={submit}  class="card-button">Back</button>
  </div>
</div>

    </div>
  )
}

export default ViewBooks