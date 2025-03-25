import React from 'react'
import "./Notification.css"
import { ImEnlarge2 } from "react-icons/im";

const Notification = () => {
    const items = ["John Doe has requested an upgrade to their account from Basic Plan to Premium Plan. Verify the user's eligibility and...", 
        "A new demo request has been received from Sarah Johnson. Email: sarah.@example.com, Company: Johnson Tech Solutions...",
         "Emily Brown has suggested a new FAQ entry. Suggested FAQ: 'How do I reset my password?'...",
          "A new subscription has been made to the Pro Plan pricing plan. User: Michael Smith, Email: michael.smith@example.com..."];
  return (
    <div className='notification-container'>
        <div className="header">
                    <div className="header-topic">
                    <p>This week</p>
                <h3 className="table-title">Notification</h3>
                </div>
                <div className="enlarge-icon-cover">
                <ImEnlarge2 className='enlarge-icon'/>
                </div>
                </div>

                <div className='notification-content'>
                <ul className="custom-list">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>
    </div>
  )
}

export default Notification