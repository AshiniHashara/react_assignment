import React from "react";
import "./Ad.css";
import { ImEnlarge2 } from "react-icons/im";
import phoneImage from "../../assets/phoneAd.png"; 

const Ad = () => {
  return (
    <div className="ad-container">
    <div className="header">
                        <div className="header-topic">
                        <p className="sub-title">This week</p>
                    <h3 className="table-title">Notification</h3>
                    </div>
                    <div className="enlarge-icon-cover">
                    <ImEnlarge2 className='enlarge-icon'/>
                    </div>
                    </div>
    

     
      <div className="content">
      
        <div className="left">
          <div className="highlight-box">5.5%</div>
          <p className="label">Total<br/> Downloads</p>
          <h2 className="percentage">80%</h2>
          <img src={phoneImage} alt="phone" className="phone-image" />
        </div>

       
        <div className="right">
          <div className="download-box google-play">
            <p>Google Play</p>
            <h2>50%</h2>
            <p className="small-text">5% from last week</p>
          </div>
          <div className="download-box apple-store">
            <p>Apple Store</p>
            <h2>30%</h2>
            <p className="small-text">0.5% from last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
