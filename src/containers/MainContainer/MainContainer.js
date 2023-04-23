import React from "react";
import './main-container.scss'
import MainHeader from "../../components/MainHeader/MainHeader";
import MainBody from "../../components/MainBody/MainBody";
import MainFooter from "../../components/MainFooter/MainFooter";

const MainContainer = () => {

    return (
      <div className="main-container">
        <MainHeader/>
        <MainBody/>
        <MainFooter/>
      </div>
    )
  }
  
export default MainContainer;
  