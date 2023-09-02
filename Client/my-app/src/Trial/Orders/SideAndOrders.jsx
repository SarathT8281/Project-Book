import React from 'react'
import SideBar from '../../Components/Sidebar'
import OrderHome from './OrdersHome'

function SideAndOrders() {
  return (
    <div className='midDiv'>
    <div className='sidebar'>
        <SideBar/>
    </div>
    <div className="table">
        <OrderHome/>
    </div>
</div>
  )
}

export default SideAndOrders