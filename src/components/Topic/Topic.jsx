import React from 'react'
import "./Topic.css"
import man from '../../assets/man.png'
import { GoArrowDownRight } from "react-icons/go";

const Topic = () => {
  return (
    <div className="sidebar-header">
      <div className="header-content">
        <p className="brand-name">ayubo.life   <img src={man} alt="Icon" className="man-icon" /></p>
       
        <div className="dashboard-text">
          Dashboard
          <div className="arrow-container">
        <GoArrowDownRight className="arrow-icon" />
      </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Topic