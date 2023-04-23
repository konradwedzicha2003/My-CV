import React from "react";
import './main-header.scss'
import PhotoSection from "./PhotoSection/PhotoSection";
import ContactInfo from "./ContactInfo/ContactInfo";

const MainHeader = () => {

    return (
      <header className="main-header">
        <div className="main-header__left-section">
          <PhotoSection/>
        </div>
        <div className="main-header__right-section">
          <ContactInfo/>
        </div>

        <div className="main-header__profession">Front-end Developer</div>
      </header>
    )
  }
  
export default MainHeader;
  