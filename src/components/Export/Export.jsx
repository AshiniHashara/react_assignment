import React from 'react'
import { CiSaveDown2 } from "react-icons/ci";
import "./Export.css"

const Export = () => {
  return (
    <div >
            <button className="export-button">
          <span className="button-text">Export CSV</span>
          <div className="download-container">
          <CiSaveDown2 className="download-icon"/>
          </div>
        </button>
        </div>
  )
}

export default Export