import React from "react";
import "./contact-info.scss";
import Email from "./Email/Email";
import Location from "./Location/Location";
import PhoneNumber from "./PhoneNumber/PhoneNumber";

const ContactInfo = () => {
    
    return (
        <div className="contact-info">
            <Email/>
            <Location/>
            <PhoneNumber/>
        </div>
    )
  }
  
export default ContactInfo;
  