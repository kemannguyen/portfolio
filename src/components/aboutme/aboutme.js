import React from "react";
import "../../styles/aboutme.css";
import CompetenceList from "./competencelist";

const Aboutme = () => {
  return (
    <div id="about-me" className="section">
      <div className="title">About Me</div>
      <div className="body-container">
        <div className="aboutme-info">
          <span className="body-text aboutme-subhead">
            Hello, my name is Keman Nguyen
          </span>
          <br></br>
          <span className="body-text " style={{ paddingRight: 40 }}>
            I am a passionate fullstack developer, game developer and
            illustrator. I am thrilled you’ve come to visit my showcase of work
            that I’ve compiled over the years, which includes a combination of
            collaborations, commissioned work and personal projects.
            <br></br> Take a look and feel free to get in touch if you’d like to
            discuss potential opportunities to work together.
          </span>
          <br></br>
          <span className="body-text " style={{ paddingRight: 40 }}>
            I studied Game development at Malmö University. During my time there
            I have finished multiple group projects, everything from making
            boardgames to creating digital games. The roles I have taken during
            the projects are gameplay and AI programmer aswell as 3D Character
            animator.
            <br></br>
            After that I was a participant in a fullstack developer program at
            Experis academy where I deepened my knowledge in front and backend
            development.
          </span>
          <br></br>
          <span className="body-text " style={{ paddingRight: 40 }}>
            One of my passions aside from coding is to illustrate and animate.
            The thing that I love with art is progression and self improvement,
            which is why I am always looking for opportunities to challange
            myself in order to grow.
          </span>
          <br></br>
          <span className="body-text " style={{ paddingRight: 40 }}>
            When I am not studying, I am probably working on a personal project,
            drawing or learning new random things.
          </span>
        </div>
        <div className="aboutme-img-comp">
          <img className="aboutme-img" src="https://i.imgur.com/bb8UqRc.png" />
          <div className="aboutme-competence">
            <CompetenceList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
