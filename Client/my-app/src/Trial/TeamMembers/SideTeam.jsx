import React from 'react'
import TeamMembers, {} from './TeamMembers'
import SideBar from '../../Components/Sidebar'

function SideTeam() {
  return (
    <div className='midDiv'>
    <div className='sidebar'>
        <SideBar/>
    </div>
    <div className="table">
        <TeamMembers/>
    </div>
</div>
  )
}

export default SideTeam