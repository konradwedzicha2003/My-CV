import React from "react";
import './main-header.scss'
import PhotoSection from "./PhotoSection/PhotoSection";
import ContactInfo from "./ContactInfo/ContactInfo";

const MainHeader = () => {

    return (
      <header className="main-header">
        <div className="main-header__top-section">
          <ContactInfo/>
        </div>
        <div className="main-header__bottom-section">
          <PhotoSection/>
        <div className="main-header__profession-box">
          <div className="main-header__profession">Front-end Developer</div>
        </div>
        </div>
      </header>
    )
  }
  
export default MainHeader;
  