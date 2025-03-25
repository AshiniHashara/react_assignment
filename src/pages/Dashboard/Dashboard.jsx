import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import "./Dashboard.css"
import Topic from '../../components/Topic/Topic'
import Button from '../../components/Button/Button'
import Organization from '../../components/Organizations/Organization'
import Notification from '../../components/Notification/Notification'
import Map from '../../components/Map/Map'
import Ad from '../../components/Ad/Ad'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
    <Navbar />

    <div className="dashboard-main">
      <Sidebar />

      <div className="dashboard-content">
       
        <div className="header-bar">
          <Topic />
          <Button />
        </div>

        
        <div className="content">
          <Organization />
          <Notification />
        </div>

        
        <div className="content-bottom">
          <Map />
          <Ad />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard