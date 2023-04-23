import React from "react";
import './photo-section.scss'
import photo from '../../../assets/photo.jpeg'

const PhotoSection = () => {
    return (
          <div className="photo-section">
            <figcaption>Konrad Wędzicha</figcaption>
            <img src={photo} alt="profile"/>
          </div>
    )
  }
  
export default PhotoSection;
  