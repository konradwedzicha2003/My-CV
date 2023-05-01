import React from "react";
import './about-template-score-list.scss'
import { defineListAlignClass } from "../AboutTemplate";

const AboutTemplateScoreList = ({list, alignPosition}) => {

    return (
        <div className="about-template-score-list">
            {list ? 
            <ul>
                {list.map(el => {
                    return (
                        <li className={defineListAlignClass(alignPosition)} key={el.text + el.score}>
                            <span>{el.text}</span>
                            <span>{el.score}%</span>
                        </li>
                    );
                })}
            </ul>
            : undefined}
        </div>
    )
  }
  
export default AboutTemplateScoreList;
  