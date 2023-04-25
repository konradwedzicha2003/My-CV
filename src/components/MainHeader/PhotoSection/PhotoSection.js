import React from "react";
import './photo-section.scss'
import photo from '../../../assets/photo.jpeg'

const PhotoSection = () => {
    return (
          <figure className="photo-section">
            <figcaption>Konrad Wędzicha</figcaption>
            <img src={photo} alt="profile"/>
          </figure>
    )
  }
  
export default PhotoSection;
  