// import React, { useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';

// function MainPage() {
//     const [Book, setBook] = useState("Hemme")
//     const [Author, setAuthor] = useState("")
//     const [Publications, setPublications] = useState("")
//     const [Year, setYear] = useState("")
//     const [Price, setPrice] = useState("")
//     const [Availability, setAvailability] = useState("")
    



//     const BookName =(event)=>{
//         setBook(event.target.value)
//     }
//     const AuthorName= (event)=>{
//         setAuthor(event.target.value)
//     }
//     const PublicationsName =(event)=>{
//         setPublications(event.target.value)
//     }
//     const HandleYear= (event)=>{
//         setYear(event.target.value)
//     }
//     const CheckPrice =(event)=>{
//         setPrice(event.target.value)
//     }
//     const CheckAvailability= (event)=>{
//         setAvailability(event.target.value)
//     }
//     const HandleAdd=async (event)=>{
//         event.preventDefault();
//         const display=await axios.post('http://localhost:3055/main',{Book,Author,Publications,Year,Price,Availability})
//         console.log(display.data);
//         localStorage.setItem('userinfo',JSON.stringify(display.data))
        
//     }
//     const HandleGet=async (event)=> {
//         event.preventDefault();
//         const display=await axios.post('http://localhost:3055/main',{Book,Author,Publications,Year,Price,Availability})
//         console.log(display.data);
//         localStorage.setItem('userinfo',JSON.stringify(display.data))
//     }
//     const HandleUpdate=async (event)=>{
//         event.preventDefault();
//         const display=await axios.post('http://localhost:3055/main',{Book,Author,Publications,Year,Price,Availability})
//         console.log(display.data);
//         localStorage.setItem('userinfo',JSON.stringify(display.data))
//     }

//     const HandleDelete =async (event) => {
//         event.preventDefault();
//         const display=await axios.post('http://localhost:3055/main',{Book,Author,Publications,Year,Price,Availability})
//         console.log(display.data);
//         localStorage.setItem('userinfo',JSON.stringify(display.data))
        
        
//     }



//   return (
//     <div>
//         <Table striped bordered hover>
//       <thead>
//         <tr>
          
//           <th  onChange={BookName}>Book Name</th>
//           <th  onChange={AuthorName}>Author</th>
//           <th  onChange={PublicationsName}>PublicationsName</th>
//           <th  onChange={HandleYear}>Year</th>
//           <th  onChange={CheckPrice}>Price</th>
//           <th  onChange={CheckAvailability}>Availability</th>
//           <th onClick={HandleGet}>View</th>
//           <th onClick={HandleUpdate}>Update</th>
//           <th onClick={HandleDelete}>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//          {

//          }

//         <tr>

//           <td> {Book} </td>
//           <td> {Author} </td>
//           <td>  </td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
          
//         </tr>
        
//       </tbody>
//     </Table>
 
//     </div>
//   )
// }

// export default MainPage










// const [Book, setBook] = useState("")
//     const [Author, setAuthor] = useState("")
//     const [Publications, setPublications] = useState("")
//     const [Year, setYear] = useState("")
//     const [Price, setPrice] = useState("")
//     const [Availability, setAvailability] = useState("")