import React from "react";
import "./Organization.css"; 
import { ImEnlarge2 } from "react-icons/im";

const Organization = () => {
  const organizations = [
    { name: "FitPro Club", members: 150, joined: 5, steps: "1,500,000", date: "15/03/2025", status: "Active" },
    { name: "Wellness Warriors", members: 80, joined: 3, steps: "900,000", date: "09/03/2025", status: "Active" },
    { name: "Healthy Hustlers", members: 45, joined: 7, steps: "450,000", date: "26/02/2025", status: "Inactive" },
    { name: "Step Titans", members: 120, joined: 2, steps: "1,200,000", date: "20/02/2025", status: "Active" },
    { name: "Corporate Climbers", members: 110, joined: 4, steps: "600,000", date: "14/02/2025", status: "Active" },
    { name: "Energetic Striders", members: 70, joined: 9, steps: "1,400,000", date: "10/02/2025", status: "Inactive" }
  ];

  return (
    <div className="organization-container">
        <div className="header">
            <div className="header-topic">
                <p>Latest</p>
                <h3 className="table-title">Organizations</h3>
            </div>
            <div className="enlarge-icon-cover">
                <ImEnlarge2 className='enlarge-icon'/>
            </div>
        </div>
        <div className="content">
      <table className="organization-table">
        <thead>
          <tr>
            <th>Organization Name</th>
            <th>Members</th>
            <th>Challenges Joined</th>
            <th>Steps Completed</th>
            <th>Start Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org, index) => (
            <tr key={index}>
              <td>{org.name}</td>
              <td>{org.members}</td>
              <td>{org.joined}</td>
              <td>{org.steps}</td>
              <td>{org.date}</td>
              <td className={org.status === "Active" ? "status-active" : "status-inactive"}>
                {org.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Organization;
