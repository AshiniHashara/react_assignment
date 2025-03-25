import React from 'react'
import "./HeaderBar.css"

const HeaderBar = () => {
  return (
    <div className='headerbar-container'>
        <span className="label">Challenges:</span>
      <span className="all">All</span> <span className="count">(1,280)</span> |
      <a href="#" className="link">Ongoing <span className="count">(1,105)</span></a> |
      <a href="#" className="link">Disable <span className="count">(175)</span></a> |
      <a href="#" className="link">Trash <span className="count">(28)</span></a>
    </div>
  )
}

export default HeaderBar