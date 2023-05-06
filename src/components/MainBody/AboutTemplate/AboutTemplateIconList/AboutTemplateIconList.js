import React from "react";
import './about-template-icon-list.scss';
import { defineListAlignClass } from "../AboutTemplate";

const AboutTemplateIconList = ({list, alignPosition}) => {

    const renderIconList = (text, icon) => {

        const defineAnimationClass = () => {
            switch (text) {
                case 'Motorbikes':
                    return 'motorbikes'
                case 'Computer games':
                    return 'games'
                case 'Long bike rides over 100km':
                    return 'bike-rides'
                case 'CSS & JS challenges':
                    return 'challenges'
            }
        }
    
        return (
            <li className={`${defineListAlignClass(alignPosition)} about-template-icon-list__${defineAnimationClass()}`} key={text}>
                <div className='about-template-icon-list__icon-wrapper'>
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
  