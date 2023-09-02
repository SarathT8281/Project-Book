import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBook() {
  const [BookName, setBookName] = useState()
  const [Author, setAuthor] = useState()
  const [PublicationsName, setPublicationsName] = useState()
  const [Year, setYear] = useState()
  const [Price, setPrice] = useState()
  const [Availability, setAvailability] = useState()

  const Navigate=useNavigate()
    


  const Submit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3055/book',{BookName,Author,PublicationsName,Year,Price,Availability})
    console.log(response);
    Navigate('/main')
  }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center' >
      <div className='w-50 bg-white rounded p-3'>

        <form onSubmit={Submit} >
          <h2>Add Books</h2>
          <div className='mb-2'>
            <label htmlFor="">Book</label>
            <input type="text" placeholder='Enter Book Name' className='form-control' onChange={(e)=>setBookName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Author</label>
            <input type="text" placeholder='Enter Author Name' className='form-control'onChange={(e)=>setAuthor(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Publication</label>
            <input type="text" placeholder='Enter Publication Name' className='form-control' onChange={(e)=>setPublicationsName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Year</label>
            <input type="number" placeholder='Enter Year' className='form-control'onChange={(e)=>setYear(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Price</label>
            <input type="number" placeholder='Enter Price' className='form-control'onChange={(e)=>setPrice(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Availability</label>
            <input type="text" placeholder='Enter Availabilty' className='form-control' onChange={(e)=>setAvailability(e.target.value)} />
          </div>
          <button className='btn btn-success'>Add Book</button>






        </form>



      </div>
     
     


    </div>
  )
}

export default AddBook