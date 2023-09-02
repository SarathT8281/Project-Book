import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function UpdateBook() {
    const {bookId} = useParams()
    const [BookName, setBookName] = useState("")
    const [Author, setAuthor] = useState("")
    const [PublicationsName, setPublicationsName] = useState("")
    const [Year, setYear] = useState("")
    const [Price, setPrice] = useState("")
    const [Availability, setAvailability] = useState("")

    const navigate=useNavigate()
    useEffect(() => {
      Change()
    }, [bookId])
    
    const Change = async () => {
        
        const response = await axios.get(`http://localhost:3055/getId/${bookId}`)
        const {data} = response;       
         setBookName(data.BookName)
        setAuthor(data.Author)
        setPublicationsName(data.PublicationsName)
        setYear(data.Year)
        setPrice(data.Price)
        setAvailability(data.Availability)
        
      }


      const updateData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3055/update/${bookId}`,{BookName,Author,PublicationsName,Year,Price,Availability})
            
            navigate('/main')
        } catch (error) {
            console.log('Error on updating book : ',error);
        }
      }

      

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center'>
    <div className='w-50 bg-white rounded p-3'>

      <form onSubmit={updateData} >
        <h2>Edit Books</h2>
        <div className='mb-2'>
          <label htmlFor="">Book</label>
          <input type="text" placeholder='Enter Book Name' className='form-control' value={BookName} onChange={(e)=>setBookName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Author</label>
          <input type="text" placeholder='Enter Author Name' className='form-control' value={Author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Publication</label>
          <input type="text" placeholder='Enter Publication Name' className='form-control' value={PublicationsName} onChange={(e)=>setPublicationsName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Year</label>
          <input type="number" placeholder='Enter Year' className='form-control' value={Year} onChange={(e)=>setYear(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Price</label>
          <input type="number" placeholder='Enter Price' className='form-control'value={Price} onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Availability</label>
          <input type="text" placeholder='Enter Availabilty' className='form-control' value={Availability} onChange={(e)=>setAvailability(e.target.value)} />
        </div>
        <Button type="submit" variant="primary">Save Changes</Button>

      </form>



    </div>
   
   </div>
  )
}

export default UpdateBook
