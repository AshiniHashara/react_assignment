import React from "react";
import taj from "../../assets/taj.png";
import man from "../../assets/man.png";
import map from "../../assets/map.png";
import "./Map.css";
import { ImEnlarge2 } from "react-icons/im";

const Map = () => {
  return (
    <div className="map-container">
      
      <div className="header">
        <h3 className="table-title">Challenges</h3>
        <div className="enlarge-icon-cover">
          <ImEnlarge2 className="enlarge-icon" />
        </div>
      </div>

      
      <div className="content">
       
        <div className="details-container">
          
          <div className="details">
            <img src={taj} alt="taj" className="taj-logo" />
            <div className="taj-detail">
              <h5 className="sub-title">Taj Samudra Colombo</h5>
              <div className="taj-date">
                <img src={man} className="man-icon" alt="man" />
                <p>Running · Sat 20, 2024</p>
              </div>
            </div>
          </div>

          
          <h3 className="event-title">Weekend Running</h3>
          <p className="event-description">
            Join our exciting Weekend Running Challenge. This challenge is a
            great opportunity to push your limits and enjoy a weekend of active
            fun. Don't miss out – register now and make every step count!
          </p>

          
          <div className="event-stats">
            <div className="event-stat">
              <h3 className="sub-title">100 km</h3>
              <p>Distance</p>
            </div>
            <div className="event-stat">
              <h3 className="sub-title">08:00 am</h3>
              <p>Starting Time</p>
            </div>
          </div>
        </div>

     
        
          <img src={map} className="map-img" alt="map" />
       
      </div>
    </div>
  );
};

export default Map;
