import React from "react";
import './main-header.scss'
import PhotoSection from "./PhotoSection/PhotoSection";
import Profession from "./Profession/Profession";
import ContactInfo from "./ContactInfo/ContactInfo";
import AboutTemplate from "../MainBody/AboutTemplate/AboutTemplate";
import { AboutMeConfig } from "../../data/info/AboutMeConfig";
import { AlignPositions } from "../../config/config";
import { mapSections } from "../MainBody/MainBody";

const MainHeader = () => {

    const { profile } = AboutMeConfig;

    return (
      <header className="main-header">
        <section className="main-header__top-section">
          <PhotoSection/>
          <Profession/>
        </section>
        <div className="main-header__division"/>
        <section className="main-header__bottom-section">
          <ContactInfo/> 
          <AboutTemplate 
            mainHeader={profile.mainHeader}
            alignPosition={AlignPositions.left}
            sections={mapSections(profile.sections)}
            isSideContent={false}
          />
        </section>
      </header>
    )
  }
  
export default MainHeader;
  