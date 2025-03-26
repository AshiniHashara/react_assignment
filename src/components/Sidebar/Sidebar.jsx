import React, { useState } from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { RiVipCrownLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({
    organizations: false,
    challenges: false,
  });

  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="sidebar">
      <ul className="dashboard-items">
        <li className="dashboard-item" onClick={()=> navigate("/")}>
          <MdDashboard />
          <p>Dashboard</p>
        </li>

        <li className="dashboard-item" onClick={() => toggleDropdown("organizations")}>
          <FiUserPlus />
          <p>Organizations</p>
          {openDropdowns.organizations ? <FaAngleUp /> : <FaAngleDown />}
        </li>
        {openDropdowns.organizations && (
          <ul className="dropdown-menu">
            <li>All Organizations</li>
            <li>Disable Organizations</li>
          </ul>
        )}

        <li className="dashboard-item" onClick={() => toggleDropdown("challenges")}>
          <RiVipCrownLine />
          <p>Challenges</p>
          {openDropdowns.challenges ? <FaAngleUp /> : <FaAngleDown />}
        </li>
        {openDropdowns.challenges && (
          <ul className="dropdown-menu">
            <li onClick={()=> navigate("/challenges")}>All Challenges</li>
            <li onClick={()=> navigate("/editchallenge")}>Ongoing Challenges</li>
            <li>Disable Challenges</li>
            <li>Complete Challenges</li>
          </ul>
        )}

        <li className="dashboard-item">
          <CiStar />
          <p>Reviews</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
