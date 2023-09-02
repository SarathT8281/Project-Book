// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdDelete } from "react-icons/md";
// import { BsFillPencilFill } from "react-icons/bs";
// import { HiEye } from "react-icons/hi2";
// import './Book.css';
// import Swal from 'sweetalert2'


// function Books() {
//     const [Book, setBook] = useState([])
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(3);
    


//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3055/get')
//                 setBook(response.data)
//                 console.log(response.data);
//             } catch (error) {
//                 console.log("Error on ferching data : ",error);
//             }
          
            
//         }
      
//       fetchData()
    
//     const Navigation= useNavigate()

//     const handleDelete = async (id) => {
//         try {
//           await axios.delete(`http://localhost:3055/delete/${id}`);
//           console.log('Book deleted successfully!');
//           fetchData();
//         //   alert('Are you sure')
//         Swal.fire({
//             title: 'Warning!',
//             text: 'Do you want to continue',
//             icon: 'error',
//             confirmButtonText: 'Yes'
//           })
//         } catch (error) {
//           console.log('Error deleting book: ', error);
//         }
//       };
    
    
//       const view=(bookId)=>{
//         Navigation(`/viewbook/${bookId}`)
//     }
  
   
    
//     const Updat=(bookId)=>{
//         Navigation(`/update/${bookId}`)
//     }

//     const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = Book.slice(indexOfFirstItem, indexOfLastItem);

  
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   

    
//   return (
   
//     <div className='all' >
//         <h1>BOOKS DETAILS</h1>
//         <div  >
//             <table className='table'>
//                 <thead className='hed'>
//                     <tr>
//                         <th>Book</th>
//                         <th>Author</th>
//                         <th>Publications</th>
//                         <th>Year</th>
//                         <th>Price</th>
//                         <th>Availability</th>
//                         <th>View</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
          
//                     </tr>
//                 </thead>
//                 <tbody className='rows'>
//                     {
//                         Book.map((obj)=>(
                        
//                             <tr>
//                                 <td>{obj.BookName}</td>
//                                 <td>{obj.Author}</td>
//                                 <td>{obj.PublicationsName}</td>
//                                 <td>{obj.Year}</td>
//                                 <td>{obj.Price}</td>
//                                 <td>{obj.Availability}</td>
                                
//                                 <td> <a onClick={()=>view(obj._id)} className='icon'> <HiEye size={20} color="blue"  /></a>  </td>
//                               <td > 
//                               <a className='icon' onClick={()=>Updat(obj._id)}> <BsFillPencilFill  size={20} color="green"/>  </a>  </td>
//                               <td><a  className='icon' onClick={(e)=>handleDelete(obj._id)}> <MdDelete size={20} color="red" />   </a> 
//                                </td> 
                            
//                             </tr>
                            
//                         ))
//                     }


//                 </tbody>

//             </table>

//         </div>
//         <div className="pagination">
//         {Array.from({ length: Math.ceil(Book.length / itemsPerPage) }).map(
//           (_, index) => (
//             <button key={index} onClick={() => paginate(index + 1)}>
//               {index + 1}
//             </button>
//           )
//         )}
//       </div>





//     </div>
//   )
// }

// export default Books


import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { BsFillPencilFill } from 'react-icons/bs';
import { HiEye } from 'react-icons/hi2';
import './Book.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function Books() {
  const [Books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); 
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3055/get');
      setBooks(response.data);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3055/delete/${id}`);
      console.log('Book deleted successfully!');
      fetchData();
      Swal.fire({
        title: 'Warning!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Yes',
      });
    } catch (error) {
      console.log('Error deleting book: ', error);
    }
  };

  const view = (bookId) => {
    Navigation(`/viewbook/${bookId}`);
  };

  const Updat = (bookId) => {
    Navigation(`/update/${bookId}`);
  };

  const Navigation = useNavigate();

  const filteredBooks = Books.filter((book) =>
  book.BookName.toLowerCase().includes(searchQuery.toLowerCase())
);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="all">
      <h1>BOOKS DETAILS</h1>
      <div>
        <input type="text" placeholder="Search by book name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div>
        <table className="table">
          <thead className="hed">
            <tr>
              <th>Book</th>
              <th>Author</th>
              <th>Publications</th>
              <th>Year</th>
              <th>Price</th>
              <th>Availability</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="rows">
            {currentItems.map((obj) => (
              <tr key={obj._id}>
                <td>{obj.BookName}</td>
                <td>{obj.Author}</td>
                <td>{obj.PublicationsName}</td>
                <td>{obj.Year}</td>
                <td>{obj.Price}</td>
                <td>{obj.Availability}</td>
                <td>
                  {' '}
                  <a onClick={() => view(obj._id)} className="icon">
                    {' '}
                    <HiEye size={20} color="blue" />
                  </a>{' '}
                </td>
                <td>
                  {' '}
                  <a className="icon" onClick={() => Updat(obj._id)}>
                    {' '}
                    <BsFillPencilFill size={20} color="green" />{' '}
                  </a>{' '}
                </td>
                <td>
                  <a className="icon" onClick={(e) => handleDelete(obj._id)}>
                    {' '}
                    <MdDelete size={20} color="red" />{' '}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="pagination">
        {Array.from({ length: Math.ceil(Books.length / itemsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div> */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Books;
