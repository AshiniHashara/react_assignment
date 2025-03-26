import React, { useState } from "react";
import "./EditChallenge.css"
import map from '../../assets/mapC.png'
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import FormInput from "../../components/FormInput/FormInput";
import taj from "../../assets/taj.png"
import { RiExpandUpDownFill } from "react-icons/ri";
import MembersList from "../../components/MembersList/MembersList";

const EditChallenge = () => {
    const [status, setStatus] = useState("Inactive");
  return (
    <div>
        <Navbar/>
        <div className="pagecontent">
            <Sidebar/>
        
    <div className="container">
        
    <div className="left-panel">
        <h2>Challenge Details</h2>
        <FormInput name="Challenge ID" value="Ch-001"/>
        <FormInput name="Distance Goal" value="100 km"/>
        <FormInput name="Challenge Name" value="Taj Samudra Colombo Weekly Running"/>
        <label>Challenge Description</label>
        <textarea readOnly>
            Join the Taj Samudra Colombo Weekly Running Challenge and experience the scenic beauty of Colombo’s coastline while pushing your limits! 🏃‍♂️
            Run at your own pace, track your progress, and compete with fellow participants to climb the leaderboard. 🌟 
            Stay consistent, earn rewards, and take a step closer to your fitness goals! 💪🎉
        </textarea>

        <h3>Additional Settings</h3>
        <div className="map-tracking">
            <img src={map} alt="Map Tracking" />
        </div>
    </div>

   
    <div className="right-panel">
        <h2>Duration & Schedule Details</h2>
        <label>Start Date</label>
        <div className="date-input-field">
        <FaCalendarAlt className="icon"/>
        <input type="date" value="2023-06-15" readOnly />
        </div>

        <label>End Date</label>
        <div className="date-input-field">
        <FaCalendarAlt className="icon"/>
        <input type="date" value="2023-06-15" readOnly />
        </div>

        <label>Start Time</label>
        <div className="date-input-field">
        <CiClock1 className="icon"/>
        <input type="time" value="08:00" readOnly />
        </div>
        <h3>Organization Details</h3>
        <label>Add Organization</label>
        <div className="taj">
            <img src={taj} className="taj-logo"/>
            <label>Taj Samudra Colombo</label>
        </div>
       
        <label>Minimum Participants</label>
        <div className="date-input-field">
        <input type="number" value="1" readOnly />
        <RiExpandUpDownFill className="icon"/>
        </div>

        <label>Maximum Participants</label>
        <div className="date-input-field">
        <input type="number" value="150" readOnly />
        <RiExpandUpDownFill className="icon"/>
        </div>
        <MembersList/>

        <h3>Challenge Status</h3>
        <div className="status-buttons">
            <button className="activate" onClick={() => setStatus("Active")}>
                Activate
            </button>
            <button className="inactive" onClick={() => setStatus("Inactive")}>
                Inactive
            </button>
            <button className="completed" onClick={() => setStatus("Completed")}>
                Completed
            </button>
        </div>

        <p className="status-display">Current Status: <strong>{status}</strong></p>

        <div className="actions">
            <button className="cancel">Cancel</button>
            <button className="save">Save Changes</button>
        </div>
    </div>
    </div>
</div>
</div>
  )
}

export default EditChallenge