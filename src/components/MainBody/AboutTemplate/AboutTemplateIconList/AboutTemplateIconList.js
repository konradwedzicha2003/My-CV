import React from "react";
import './about-template-icon-list.scss';
import { defineListAlignClass } from "../AboutTemplate";

const AboutTemplateIconList = ({list, alignPosition}) => {

    const renderIconList = (text, icon) => {
        return (
            <li className={defineListAlignClass(alignPosition)} key={text}>
                <div className="about-template-icon-list__icon-wrapper">
                    <img src={icon} alt='hobby'/>
                </div>
                <p>
                    {text}
                </p>
            </li>
        )
    }

    return (
        <div className="about-template-icon-list">
            {list ? 
            <ul>
                {list.map(el => {
                    return renderIconList(el.text, el.icon)
                })}
            </ul>
            : undefined}
        </div>
    )
  }
  
export default AboutTemplateIconList;
  