import React from "react";
import "./location.scss";
import "../contact-info.scss";
import location from "../../../../assets/location.png";

const Location = () => {

    return (
      <div class="contact-info__content-box">
        <div class="contact-info__icon">
            <img src={location} alt="location"/>
        </div>
        <div class="contact-info__location">
            <span>Zagacie ul. Jana III Sobieskiego 52</span>
        </div>
    </div>
    )
  }
  
export default Location;
  