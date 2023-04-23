import React from "react";
import "./phone-number.scss"
import "../contact-info.scss";
import phone from "../../../../assets/phone.png";

const PhoneNumber = () => {
    return (
      <div class="contact-info__content-box">
        <div class="contact-info__icon">
            <img src={phone} alt="phone"/>
        </div>
        <div class="contact-info__phone-number">
            <a href="tel:660-624-262">660 624 262</a>
        </div>
    </div>
    )
  }
  
export default PhoneNumber;
  