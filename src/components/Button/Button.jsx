import React from 'react'
import "./Button.css"
import { FaPlus } from "react-icons/fa6";

const Button = () => {
  return (
    <div >
        <button className="add-button">
      <span className="button-text">Start a New Challenge</span>
      <div className="plus-container">
        <FaPlus className="plus-icon" />
      </div>
    </button>
    </div>
  )
}

export default Button