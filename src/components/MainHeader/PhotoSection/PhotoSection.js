import React from "react";
import './photo-section.scss'
import photo from '../../../assets/photo.jpeg'

const PhotoSection = () => {
    return (
          <figure className="photo-section">
            <figcaption>
              <div className="figcaption-line figcaption-line__vertical figcaption-line__vertical--top-left"></div>
              <div className="figcaption-line figcaption-line__vertical figcaption-line__vertical--bottom-right"></div>
              <div className="figcaption-line figcaption-line__horizontal figcaption-line__horizontal--top-left"></div>
              <div className="figcaption-line figcaption-line__horizontal figcaption-line__horizontal--bottom-right"></div>

              Konrad Wędzicha
              </figcaption>
            <img src={photo} alt="profile"/>
          </figure>
    )
  }
  
export default PhotoSection;
  