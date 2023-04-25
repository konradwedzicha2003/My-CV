import React from "react";
import './about-template-skills-list.scss'
import SkillsLevel from "./SkillsLevel/SkillsLevel";

const AboutTemplateSkillsList = ({list, alignPosition}) => {

    return (
        <div className="about-template-skills-list">
            {list ? 
            <ul>
                {list.map(el => {
                    return (
                        <li key={el.skill}>
                            <SkillsLevel level={el.level} levelCount={5}/>
                            <p>
                                {el.skill}
                            </p>
                        </li>
                    )
                })}
            </ul>
            : undefined}
        </div>
    )
  }
  
export default AboutTemplateSkillsList;
  