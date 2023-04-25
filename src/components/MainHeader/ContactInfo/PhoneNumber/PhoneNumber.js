import React from "react";
import "./phone-number.scss"
import "../contact-info.scss";
import phone from "../../../../assets/phone.png";

const PhoneNumber = () => {
    return (
      <div className="contact-info__content-box">
        <div className="contact-info__icon">
            <img src={phone} alt="phone"/>
        </div>
        <div className="contact-info__phone-number">
            <a href="tel:660-624-262">660 624 262</a>
        </div>
    </div>
    )
  }
  
export default PhoneNumber;
  