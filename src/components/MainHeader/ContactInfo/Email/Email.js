import React from "react";
import "./email.scss";
import "../contact-info.scss";
import email from "../../../../assets/email.png";

const Email = () => {

    return (
        <div class="contact-info__content-box">
            <div class="contact-info__icon">
                <img src={email} alt="email"/>
            </div>
            <div class="contact-info__email">
                <a href="mailto:konradw2003@interia.pl">konradw2003@interia.pl</a>
            </div>
        </div>
    )
  }
  
export default Email;
  