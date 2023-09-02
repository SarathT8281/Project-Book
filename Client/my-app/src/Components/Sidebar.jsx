import React from 'react'
import './SideBar.css'
import { FcNook,FcPortraitMode,FcConferenceCall,FcDocument,FcPlus } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';




function SideBar() {
  return (
    <div className='sidebar'>

        <h1 className='bs'>Books Store</h1>

        <div className="books">
        
           <Link to={'/main'}><h2 style={{color:'white'}}> <FcNook/>  BOOKS</h2></Link>  
             
            <Link  to={'/addbook'}> <h3 style={{color:'white'}}  > <FcPlus className='icon'/> Add Books </h3></Link>
            
             
             
             </div>
             {/* <div className="books">
             <h2> <FcPortraitMode/> Clients</h2>

             <h3> <FcPlus/> Add Clients</h3>
             </div> */}
{/* 
             <div className="books">
                <h2> <FcConferenceCall/> Costomers</h2>
                <h3> <FcPlus/> Add Costomers</h3>
             </div> */}
             <div className="books">
               <Link to={'/membmain'}> <h2 style={{color:'white'}}> <FcConferenceCall/> Team Members</h2> </Link>
               <Link to={'/addmember'}><h3 style={{color:'white'}}> <FcPlus/> Add Team Member </h3> </Link> 
             </div>
             <div className="books">
              <Link to={'/ordermain'}><h2 style={{color:'white'}}> <FcDocument/> Orders</h2></Link>  
               <Link to={'/addorder'}><h3> <FcPlus/> Place Orders</h3></Link> 
             </div>
       
            
        





    </div>
  )
}

export default SideBar




