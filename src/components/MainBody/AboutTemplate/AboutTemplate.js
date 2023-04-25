import React from "react";
import './about-template.scss'
import { AboutMeListTypes } from "../../../config/config";
import AboutTemplateScoreList from "./AboutTemplateScoreList/AboutTemplateScoreList";
import AboutTemplateDotList from "./AboutTemplateDotList/AboutTemplateDotList";
import AboutTemplateSkillsList from "./AboutTemplateSkillsList/AboutTemplateSkillsList";
import AboutTemplateIconList from "./AboutTemplateIconList/AboutTemplateIconList";


const AboutTemplate = ({ templateListType, text = '', list, primaryHeader, secondaryHeader, dotPosition}) => {

    const renderList = (list) => {
        switch (templateListType) {
            case AboutMeListTypes.scoreList:
                return <AboutTemplateScoreList list={list} />
            case AboutMeListTypes.dotList:
                return <AboutTemplateDotList list={list} dotPosition={dotPosition}/>
            case AboutMeListTypes.skillsList:
                return <AboutTemplateSkillsList list={list}/>
            case AboutMeListTypes.iconList:
                return <AboutTemplateIconList list={list}/>
        }
    }

    return (
        <div className="about-template">
            {primaryHeader ? <h2>{primaryHeader}</h2> : undefined}
            {secondaryHeader ? <h3>{secondaryHeader}</h3> : undefined}
            {text ? <p className="about-template__paragraph">{text}</p> : undefined}
            {templateListType ? renderList(list) :
            <div>
                <p>
                    {text}
                </p>
            </div>}
        </div>
    )
  }
  
export default AboutTemplate;
  