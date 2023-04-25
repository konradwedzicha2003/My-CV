import React from "react";
import './about-template-icon-list.scss';
import challenges from "../../../../assets/challenges.png";
import games from "../../../../assets/games.png";
import walks from "../../../../assets/walks.png";
import bikeRides from "../../../../assets/bikeRides.png";
import motorbike from "../../../../assets/motorbike.png";


const AboutTemplateIconList = ({list, alignPosition}) => {

    const renderIcon = (hobby) => {
        switch (hobby) {
            case 'CSS & JS challenges':
                return <img src={challenges} alt={hobby}/>
            case 'Computer games':
                return <img src={games} alt={hobby}/>
            case 'Walks in the fresh air':
                return <img src={walks} alt={hobby}/>
            case 'Long bike rides over 100km':
                return <img src={bikeRides} alt={hobby}/>
            case 'Motorbikes':
                return <img src={motorbike} alt={hobby}/>
            default: 
                return <div>Missing Icon</div>
        }
    }

    const renderIconList = (text) => {
        return (
            <li key={text}>
                <div className="about-template-icon-list__icon-wrapper">
                    {renderIcon(text)}
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
                    return renderIconList(el.text)
                })}
            </ul>
            : undefined}
        </div>
    )
  }
  
export default AboutTemplateIconList;
  