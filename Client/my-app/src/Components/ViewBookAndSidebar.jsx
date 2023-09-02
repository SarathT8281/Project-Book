import React from 'react'
import ViewBooks from '../Trial/ViewBooks'
import SideBar from './Sidebar'

function ViewBookAndSidebar() {
  return (
    <div className='midDiv'>
    <div className='sidebar'>
        <SideBar/>
    </div>
    <div className="table">
        <ViewBooks/>
    </div>
</div>
  )
}

export default ViewBookAndSidebar