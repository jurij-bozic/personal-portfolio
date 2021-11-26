import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg";
import jsIcon from "../images/javascript.svg";
import reactIcon from "../images/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {/* {data.aboutParaThree} */}
              <div style={{ 
                display: 'grid',
                // gridTemplateColumns: '120px 120px 120px 120px 120px'
                }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img className="lang-img" src={htmlIcon} style={{ width: 70 }}/>
                  <img className="lang-img" src={cssIcon} style={{ width: 65 }}/>
                  <img className="lang-img" src={jsIcon} style={{ width: 70 }}/>
                  <img className="lang-img" src={reactIcon} style={{ width: 80, color: 'black' }}/>
                  <FontAwesomeIcon icon={fab['faPhp']} style={{ fontSize: 60 }}/>
                </div>
              </div>
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
