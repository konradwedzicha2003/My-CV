import React from "react";
import './about-template-score-list.scss'

const AboutTemplateScoreList = ({list}) => {

    return (
        <div className="about-template-score-list">
            {list ? 
            <ul>
                {list.map(el => {
                    return (
                        <li>
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
  