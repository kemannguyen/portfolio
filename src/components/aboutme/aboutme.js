import { useRef, useState, useEffect } from "react";
import "../../styles/aboutme.css";
import FadeInSection from "../fadeinsection";
//import CompetenceList from "./competencelist";

const Aboutme = ({ setAboPosPC }) => {
  const boxRef3 = useRef();

  // Y
  const [y, setY] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    try {
      const y = boxRef3.current.offsetTop;
      setY(y);
    } catch (e) {}
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  });

  function UpdateY(y) {
    useEffect(() => {
      setAboPosPC(y);
    });
  }
  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  return (
    <div id="about-me" className="section">
      <div className="title" ref={boxRef3} onResize={UpdateY(y)}>
        About Me
      </div>
      <FadeInSection>
        <div className="body-container">
          <div className="aboutme-info">
            <span className="body-text aboutme-subhead">
              Hello, my name is Keman Nguyen
            </span>
            <br></br>
            <span className="body-text " style={{ paddingRight: 40 }}>
              I'm a versatile developer with a background in Game Development
              from Malmö University, where I contributed to various group
              projects ranging from board games to digital games. In these
              projects, I took on roles such as gameplay and AI programmer, as
              well as a 3D character animator.
              <br></br>
              Additionally, I have .NET Fullstack Development experience through
              Experis Academy, where I gained proficiency in technologies like
              Node.js, React, Angular, JavaScript, TypeScript, Java, C#,
              Express.js, MySQL, and Azure. This blend of technical skills and
              creative project work makes me well-equipped for a variety of
              development challenges.
            </span>
            <br></br>
            <span className="body-text " style={{ paddingRight: 40 }}></span>
            <br></br>
            <span className="body-text " style={{ paddingRight: 40 }}></span>
          </div>
          <div className="aboutme-img-comp">
            <img
              className="aboutme-img"
              src="https://i.imgur.com/NNi1gvj.png"
              alt=""
            />
            {/*<div className="aboutme-competence">{<CompetenceList />}</div>*/}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Aboutme;
