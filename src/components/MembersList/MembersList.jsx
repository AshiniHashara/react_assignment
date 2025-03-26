import React from "react";
import "./MembersList.css";
import user1 from "../../assets/user1.jfif";
import user2 from "../../assets/user2.jfif";
import user3 from "../../assets/user3.jfif";
import user4 from "../../assets/user4.jfif";

const MembersList = () => {
  const members = [
    { id: 1, img: user1 },
    { id: 2, img: user2 },
    { id: 3, img: user3 },
    { id: 4, img: user4 },
  ];

  return (
    <div className="members-container">
      <p className="members-title">Add Members</p>
      <div className="members">
      <div className="members-list">
        {members.map((member) => (
          <img key={member.id} src={member.img} alt="Member" className="member-img" />
        ))}
        <div className="more-members">+146</div>
      </div>
      <p className="participants-count">150 Participants</p>
      </div>
      <p className="add-member">+ Add New Member</p>
      
    </div>
  );
};

export default MembersList;
