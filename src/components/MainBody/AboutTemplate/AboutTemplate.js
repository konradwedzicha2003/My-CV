import React, { Fragment } from "react";
import './about-template.scss'
import { AboutMeListTypes } from "../../../config/config";
import AboutTemplateScoreList from "./AboutTemplateScoreList/AboutTemplateScoreList";
import AboutTemplateDotList from "./AboutTemplateDotList/AboutTemplateDotList";
import AboutTemplateSkillsList from "./AboutTemplateSkillsList/AboutTemplateSkillsList";
import AboutTemplateIconList from "./AboutTemplateIconList/AboutTemplateIconList";


const AboutTemplate = ({ 
    templateListType, 
    sections,
    text = '', 
    list,
    mainHeader, 
    primaryHeader, 
    secondaryHeader, 
    alignPosition, 
    separateParagraphFromHeaders,
    isSideContent,
}) => {

    const defineList = (list, templateListType) => {
        switch (templateListType) {
            case AboutMeListTypes.scoreList:
                return <AboutTemplateScoreList list={list} alignPosition={alignPosition}/>
            case AboutMeListTypes.dotList:
                return <AboutTemplateDotList list={list} alignPosition={alignPosition}/>
            case AboutMeListTypes.skillsList:
                return <AboutTemplateSkillsList list={list} alignPosition={alignPosition}/>
            case AboutMeListTypes.iconList:
                return <AboutTemplateIconList list={list} alignPosition={alignPosition}/>
        }
    }

    const defineHeadersClass = () => {
        switch (alignPosition) {
            case 'left':
                return 'about-template__header-align-left'
            case 'right':
                return 'about-template__header-align-right'
            default: 
                return ''
        }
    }

    const renderHeaders = (primaryHeader, secondaryHeader) => {
        return (
            <>
                {primaryHeader ? <h2 className={defineHeadersClass()}>{primaryHeader}</h2> : undefined}
                {secondaryHeader ? <h3 className={defineHeadersClass()}>{secondaryHeader}</h3> : undefined}
            </>
        )
    }

    const renderParagraph = (text) => {
        return (
            text ? <p className="about-template__paragraph">{text}</p> : undefined
        )
    }

    const renderList = (list, templateListType) => {
        return (
            templateListType && list ? defineList(list, templateListType) : undefined
        )
    }

    const renderSeparator = (separateParagraphFromHeaders) => {
        return (
            separateParagraphFromHeaders ? <div className="about-template__division"/> : undefined
        )
    }

    return (
        <div className={`about-template ${isSideContent ? 'about-template--side-content' : 'about-template--main-content'}`}>
            <div className="about-template__wrapper">
                {mainHeader ? <header className={defineHeadersClass()}>{mainHeader}</header> : undefined}
                {!sections ? renderHeaders(primaryHeader, secondaryHeader) : undefined}
                {!sections ? renderSeparator(separateParagraphFromHeaders) : undefined}
                {renderParagraph(text)}
                {renderList(list, templateListType)}
                {sections ? sections.map(section => {
                    return (
                        <div className="about-template__sections-template" key={section.primaryHeader}>                    
                            {renderHeaders(section.primaryHeader, section.secondaryHeader)}
                            {renderSeparator(section.separateParagraphFromHeaders)}
                            {renderParagraph(section.text)}
                            {renderList(section.list, section.listType)}
                        </div>
                    )
                }) : undefined}
            </div>
        </div>
    )
  }
  
export default AboutTemplate;
  