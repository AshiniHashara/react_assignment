import React from 'react'
import "./Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { RiVipCrownLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='dashboard-items'>
            <li className='dashboard-item'>
    
                    <MdDashboard />
                    <p>Dashboard</p>
                
            </li>
            <li className='dashboard-item'>
                
                    <FiUserPlus />
                    <p>Organizations</p>
                    <FaAngleDown />
                
            </li>
            <li className='dashboard-item'>
            
                <RiVipCrownLine />
                <p>Challanges</p>
                <FaAngleDown />
           
            </li>
            <li className='dashboard-item'>
            
                <CiStar />
                <p>Reviews</p>
           
            </li>
        </ul>
    </div>
  )
}

export default Sidebar