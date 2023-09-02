import React from 'react'
import SideBar from './Sidebar'
import AddBook from './Operations/AddBook'
import './TableAndSide.css'
import Books from '../Trial/Books'

const MainAndSide = () => {
  return (
    <div className='midDiv'>
        <div className='sidebar'>
            <SideBar/>
        </div>
        <div className="table">
            <Books/>
        </div>
    </div>
  )
}

export default MainAndSide