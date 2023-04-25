import React from "react";
import './main-body.scss';
import AboutTemplate from "./AboutTemplate/AboutTemplate";
import { AboutMeConfig } from "../../data/info/AboutMeConfig";
import { AboutMeListTypes, AlignPositions } from "../../config/config"

const MainBody = () => {

  const {
    education,
    skills,
    achievements,
    hobby,
    profile,
    experience,
  } =  AboutMeConfig;

  const mapMaturaResults = education.maturaResults.map(el => {
    return {
      text: el.subject,
      score: el.score,
    }
  })

  const mapHobbyList = hobby.hobbyList.map(el => {
    return {
      text: el.hobby,
    }
  })

  const mapAchievementsList = achievements.achievementsList.map(el => {
    return {
      text: el.achievement,
      score: el.score,
    }
  })

  const mapSkillsList = skills.skillsList.map(el => {
    return {
      skill: el.skill,
      level: el.level,
    }
  })

  const mapSections = (sections) => {
    return sections.map(section => {
      return {
        primaryHeader: section.header,
        text: section.text,
        separateParagraphFromHeaders: section.separateParagraphFromHeaders,
        list: section.list?.map(sectionListElement => {
          const objectArr = Object.entries(sectionListElement);
  
          return {
            text: sectionListElement[objectArr[0][0]],
          }
        }),
        listType: section.listType
      }
    }) 
  }

  return (
    <main className="main-body">
        <section className="main-body__abilities-section">
          <AboutTemplate 
            templateListType={AboutMeListTypes.scoreList} 
            text={education.text} 
            mainHeader={education.mainHeader}
            primaryHeader={education.primaryHeader} 
            secondaryHeader={education.secondaryHeader} 
            list={mapMaturaResults}
            alignPosition={AlignPositions.right}
            isSideContent={true}
          />
          <AboutTemplate 
            templateListType={AboutMeListTypes.skillsList} 
            mainHeader={skills.header}
            list={mapSkillsList} 
            alignPosition={AlignPositions.right}
            isSideContent={true}
          />
          <AboutTemplate 
            templateListType={AboutMeListTypes.dotList} 
            mainHeader={achievements.header}
            list={mapAchievementsList}
            alignPosition={AlignPositions.right}
            isSideContent={true}
          />
          <AboutTemplate 
            templateListType={AboutMeListTypes.iconList} 
            mainHeader={hobby.header}
            list={mapHobbyList} 
            alignPosition={AlignPositions.right}
            isSideContent={true}
          />
        </section>
        <div className="main-body__division"/>
        <section className="main-body__about-me-section">
          <AboutTemplate 
              mainHeader={profile.mainHeader}
              alignPosition={AlignPositions.left}
              sections={mapSections(profile.sections)}
              isSideContent={false}
          />
          <AboutTemplate 
              mainHeader={experience.mainHeader}
              alignPosition={AlignPositions.left}
              sections={mapSections(experience.sections)}
              isSideContent={false}
          />

        </section>
    </main> 
  )
}
  
export default MainBody;
  