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
          <div className="aboutme-info ">
            <span className="body-text aboutme-subhead">
              Hello, my name is Keman Nguyen
            </span>
            <br></br>
            <span className="body-text">
              I'm a versatile developer with a background in Game Development
              from Malmö University, where I contributed to various group
              projects ranging from board games to digital games. In these
              projects, I took on roles such as gameplay and AI programmer, as
              well as a 3D character animator.
              <br></br>
              <br></br>
              Additionally, I have .NET Fullstack Development experience through
              Experis Academy, where I gained proficiency in technologies like
              Node.js, React, Angular, JavaScript, TypeScript, Java, C#,
              Express.js, MySQL, and Azure. This blend of technical skills and
              creative project work makes me well-equipped for a variety of
              development challenges.
            </span>
          </div>
          <div className="aboutme-img-comp" style={{ marginBottom: "100px" }}>
            <img
              className="aboutme-img"
              src="https://i.imgur.com/NNi1gvj.png"
              alt=""
            />
            {/*<div className="aboutme-competence">{<CompetenceList />}</div>*/}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div>
          <span className="title">Hobbies</span>
          <br></br>
          <div className="introduction-container">
            <span className="body-text">
              <br></br>
              During my spare time I love experimenting and learning new things.
              I usually tackle challanges where my creative side of the brain
              gets stimmulated. I've tried everything from Music
              production/design and instruments to some DIY projects. Here are
              some fun examples!
            </span>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div style={{ marginTop: 50 }}>
          <div className="test"> Bear backpack</div>
          <iframe
            src={
              "https://drive.google.com/file/d/1JurgAe0elHH4DTYdz7TTpmYfnmp_Dfbj/preview"
            }
            className="image-view centered"
            allow="autoplay; encrypted-media"
            title="video"
            style={{ width: "10px" }}
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div style={{ marginTop: 50 }}>
          <div className="test"> Paper bouquet</div>
          <iframe
            src={
              "https://drive.google.com/file/d/119m8Iqbp6A2n5qLhMabiD8-kRojRCVCK/preview"
            }
            className="image-view centered"
            allow="autoplay; encrypted-media"
            title="video"
          />
        </div>
      </FadeInSection>
    </div>
  );
};

export default Aboutme;
