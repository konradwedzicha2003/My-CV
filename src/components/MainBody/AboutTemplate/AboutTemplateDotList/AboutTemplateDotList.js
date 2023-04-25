import React from "react";
import './about-template-dot-list.scss'

const AboutTemplateDotList = ({list, alignPosition}) => {
    const renderProperDotListElement = (text) => {
        switch (alignPosition) {
            case 'left':
                return (
                    <li key={text} className="about-template-dot-list__list-element about-template-dot-list__list-element--left">
                        <div className="about-template-dot-list__dot about-template-dot-list__dot--left"/>
                        <p>{text}</p>
                    </li>
                )
            case 'right': 
                return (
                    <li key={text} className="about-template-dot-list__list-element about-template-dot-list__list-element--right">
                        <div className="about-template-dot-list__dot about-template-dot-list__dot--right"/>
                        <p>{text}</p>
                    </li>
                )
            default:
                return (
                    <li key={text} className="about-template-dot-list__list-element">
                        <p>{text}</p>
                    </li>
                )
        }    
    }

    return (
        <div className="about-template-dot-list">
            {list ? 
            <ul>
                {list.map(el => renderProperDotListElement(el.text))}
            </ul>
            : undefined}
        </div>
    )
  }
  
export default AboutTemplateDotList;
  