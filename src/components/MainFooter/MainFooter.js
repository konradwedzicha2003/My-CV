import React from "react";
import './main-footer.scss';
import { AboutMeConfig } from "../../data/info/AboutMeConfig";

const MainFooter = () => {

    const { footerContent } = AboutMeConfig;

    return (
      <footer className="main-footer">
        <p>{footerContent}</p>
      </footer>
    )
  }
  
export default MainFooter;
  