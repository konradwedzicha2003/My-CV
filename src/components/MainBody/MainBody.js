import React from "react";
import './main-body.scss';
import AboutTemplate from "./AboutTemplate/AboutTemplate";
import { AboutMeConfig } from "../../data/info/AboutMeConfig";
import { AboutMeListTypes, DotPostitions } from "../../config/config"

const MainBody = () => {

    const {
      education, maturaResults,
      skills, skillsList,
      achievements, achievementsList,
      hobby, hobbyList,
    } =  AboutMeConfig;

    const mapMaturaResults = maturaResults.map(el => {
      return {
        text: el.subject,
        score: el.score,
      }
    })

    const mapHobbyList = hobbyList.map(el => {
      return {
        text: el.hobby,
      }
    })

    const mapAchievementsList = achievementsList.map(el => {
      return {
        text: el.achievement,
        score: el.score,
      }
    })

    const mapSkillsList = skillsList.map(el => {
      return {
        skill: el.skill,
        level: el.level,
      }
    })

    return (
      <main className="main-body">
          <section className="main-body__abilities-section">
            <AboutTemplate 
              templateListType={AboutMeListTypes.scoreList} 
              text={education.text} 
              primaryHeader={education.primaryHeader} 
              secondaryHeader={education.secondaryHeader} 
              list={mapMaturaResults} 
            />
            <AboutTemplate 
              templateListType={AboutMeListTypes.skillsList} 
              primaryHeader={skills.primaryHeader} 
              list={mapSkillsList} 
            />
            <AboutTemplate 
              templateListType={AboutMeListTypes.dotList} 
              primaryHeader={achievements.primaryHeader} 
              list={mapAchievementsList}
              dotPosition={DotPostitions.right}
            />
            <AboutTemplate 
              templateListType={AboutMeListTypes.iconList} 
              primaryHeader={hobby.primaryHeader} 
              list={mapHobbyList} 
            />
          </section>
          <div className="main-body__division"/>
          <section className="main-body__about-me-section">

          </section>
      </main> 
    )
  }
  
export default MainBody;
  