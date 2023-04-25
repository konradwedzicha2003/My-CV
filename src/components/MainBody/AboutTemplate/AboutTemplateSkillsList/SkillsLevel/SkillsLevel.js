import React from 'react';
import './skills-level.scss'

const SkillsLevel = ({level, levelCount}) => {

  const createSkillsLevels = () => {
    let levels = [];

    for (let i = 0; i < levelCount; i++) {
      levels.push({count: i});
    }

    for (let i = 0; i < level; i++) {
      levels[i].isLevelReached = true;
    }

    return levels;
}


  return (
    <div className='skills-level-wrapper'>
      {createSkillsLevels().map(el => {
        return (
          <div key={el.count} className={`skills-level ${el.isLevelReached ? 'skills-level--reached' : ''}`}/>
        )
      })}
    </div>
  )
}
  
export default SkillsLevel;
  