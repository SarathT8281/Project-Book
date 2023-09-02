import React from 'react'

function DeleteBook() {
  return (
    <div className='header' >
    <h3>Book Name</h3>
    <input type="text" onChange={(e)=>setBook(e.target.value)} />
    <h3>Author</h3>
    <input type="text" onChange={(e)=>setBook(e.target.value)} />
    <h3>Publications</h3>
    <input type="text" onChange={(e)=>setBook(e.target.value)} />
    <h3>Year</h3>
    <input type="number" onChange={(e)=>setBook(e.target.value)} />
    <h3>Price</h3>
    <input type="number" onChange={(e)=>setBook(e.target.value)} />
    <h3>Availability</h3>
    <input type="text" onChange={(e)=>setBook(e.target.value)} /> <br />
    <Button variant="primary" className="btn" >Add</Button></div>
  )
}

export default DeleteBook