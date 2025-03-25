import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jfif';
import { MdSearch } from 'react-icons/md';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      
      <div className="search">
        <div className="searchBox">
          <input type="text" className="searchInput" placeholder="Search" />
          <div className="searchIcon">
            <MdSearch className="icon" />
          </div>
        </div>
      </div>

      
      <div className="details">
        <div className="notification">
          <IoNotificationsOutline className="icon" />
          <p>Tue, 16 Jul</p>
          <div className="notification-count">5</div>
        </div>

        <div className="setting">
          <IoSettingsOutline className="icon" />
        </div>

        <div className="profile">
          <img src={profile} alt="profile-img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
