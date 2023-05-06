import React from "react";
import "./email.scss";
import "../contact-info.scss";
import email from "../../../../assets/email.png";

const Email = () => {

    return (
        <div className="contact-info__content-box email">
            <div className="contact-info__icon">
                <img src={email} alt="email"/>
            </div>
            <div className="contact-info__email">
                <div className="contact-info__underline"/>
                <a href="mailto:konradw2003@interia.pl">konradw2003@interia.pl</a>
            </div>
        </div>
    )
  }
  
export default Email;
  