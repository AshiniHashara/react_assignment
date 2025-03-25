import React from 'react'
import "./Challenges_table.css"
import img_0 from '../../assets/img_0.png'
import img_1 from '../../assets/img_1.jfif'
import img_2 from '../../assets/img_2.jfif'
import img_3 from '../../assets/img_3.jfif'
import img_4 from '../../assets/img_4.jpg'
import img_5 from '../../assets/img_5.jfif'
import img_6 from '../../assets/img_6.jfif'



const Challenges_table = () => {
    const challengesData = [
        {
          image: img_1,
          name: "Taj Samudra Colo...",
          id: "Ch-001",
          participants: 150,
          distance: "100 km",
          stepsTarget: "980,000",
          startDate: "2023-06-15",
          startTime: "08:00 am",
          endDate: "2023-06-15",
          status: "Active",
        },
        {
          image: img_2,
          name: "FitLife Gym Week...",
          id: "Ch-002",
          participants: 85,
          distance: "50 km",
          stepsTarget: "850,500",
          startDate: "2023-08-20",
          startTime: "08:00 am",
          endDate: "2023-08-20",
          status: "Active",
        },
        {
          image: img_3,
          name: "Wellness Club 10K...",
          id: "Ch-003",
          participants: 200,
          distance: "100 km",
          stepsTarget: "1,200,000",
          startDate: "2022-11-10",
          startTime: "08:30 am",
          endDate: "2022-11-10",
          status: "Inactive",
        },
        {
          image: img_4,
          name: "StridePro Monthly...",
          id: "Ch-004",
          participants: 320,
          distance: "50 km",
          stepsTarget: "600,400",
          startDate: "2024-01-05",
          startTime: "09:00 am",
          endDate: "2024-01-05",
          status: "Active",
        },
        {
          image: img_5,
          name: "ActiveCorp Daily S...",
          id: "Ch-005",
          participants: 120,
          distance: "30 km",
          stepsTarget: "1,450,300",
          startDate: "2021-12-12",
          startTime: "10:00 am",
          endDate: "2021-12-12",
          status: "Active",
        },
        {
          image: img_6,
          name: "MoveWell Foundat...",
          id: "Ch-006",
          participants: 95,
          distance: "80 km",
          stepsTarget: "775,000",
          startDate: "2023-05-22",
          startTime: "08:30 am",
          endDate: "2023-05-22",
          status: "Active",
        },
        {
          image: img_1,
          name: "UrbanFit Arena Mo...",
          id: "Ch-003",
          participants: 180,
          distance: "40 km",
          stepsTarget: "1,200,000",
          startDate: "2022-11-10",
          startTime: "09:00 am",
          endDate: "2022-11-10",
          status: "Inactive",
        },
        {
          image: img_2,
          name: "StepMasters Club...",
          id: "Ch-004",
          participants: 60,
          distance: "60 km",
          stepsTarget: "600,400",
          startDate: "2024-01-05",
          startTime: "10:00 am",
          endDate: "2024-01-05",
          status: "Active",
        },
        {
          image: img_3,
          name: "Peak Performance...",
          id: "Ch-005",
          participants: 110,
          distance: "150 km",
          stepsTarget: "1,450,300",
          startDate: "2021-12-12",
          startTime: "08:30 am",
          endDate: "2021-12-12",
          status: "Active",
        },
        {
          image: img_1,
          name: "City Runners Wee...",
          id: "Ch-006",
          participants: 180,
          distance: "50 km",
          stepsTarget: "775,000",
          startDate: "2023-05-22",
          startTime: "08:00 am",
          endDate: "2023-05-22",
          status: "Active",
        },
        {
          image: img_2,
          name: "Ever Sports Club...",
          id: "Ch-003",
          participants: 75,
          distance: "60 km",
          stepsTarget: "1,200,000",
          startDate: "2022-11-10",
          startTime: "10:00 am",
          endDate: "2022-11-10",
          status: "Inactive",
        },
        {
          image: img_4,
          name: "GreenStride Eco W...",
          id: "Ch-004",
          participants: 250,
          distance: "70 km",
          stepsTarget: "600,400",
          startDate: "2024-01-05",
          startTime: "09:00 am",
          endDate: "2024-01-05",
          status: "Active",
        },
      ];
      
  return (
    <div className="table-container">
      <table className="challenges-table">
        <thead>
          <tr>
            <th><img src={img_0} className='th-img'/></th>
            <th>Challenge Name</th>
            <th>ChgID</th>
            <th>Participants</th>
            <th>Distance</th>
            <th>Steps Target</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {challengesData.map((challenge, index) => (
            <tr key={index} className="table-row">
              <td>
                <img src={challenge.image} alt="Challenge" className="challenge-img" />
              </td>
              <td>{challenge.name}</td>
              <td>{challenge.id}</td>
              <td>{challenge.participants}</td>
              <td>{challenge.distance}</td>
              <td>{challenge.stepsTarget}</td>
              <td>{challenge.startDate}</td>
              <td>{challenge.startTime}</td>
              <td>{challenge.endDate}</td>
              <td className={challenge.status === "Active" ? "active-status" : "inactive-status"}>
                {challenge.status}
              </td>
              <td>⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">»</button>
      </div>
    </div>
  )
}

export default Challenges_table