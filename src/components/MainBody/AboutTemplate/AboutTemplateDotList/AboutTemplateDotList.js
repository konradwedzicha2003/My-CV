import React from "react";
import './about-template-dot-list.scss'

const AboutTemplateDotList = ({list, alignPosition}) => {

    const renderProperDotListElement = (text) => {
        return (
            <li 
            key={text} 
            className={`about-template-dot-list__list-element ${
                alignPosition === 'left' ? 'about-template-dot-list__list-element--left' : 'about-template-dot-list__list-element--right'}`}
            >
                {alignPosition 
                ?   <div 
                    className={`about-template-dot-list__dot ${
                        alignPosition === 'left' ? 'about-template-dot-list__dot--left' : 'about-template-dot-list__dot--right'}`}
                    /> 
                : undefined}
                <p>{text}</p>
            </li>
        )
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
  