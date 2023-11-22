import React from "react";
import "../styles/menu.css";

const Menu = () => {
  const scrollToAboutMe = () => {
    const section = document.querySelector("#about-me");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToEducation = () => {
    const section = document.querySelector("#education");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToProjects = () => {
    const section = document.querySelector("#projects");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToExperiences = () => {
    const section = document.querySelector("#experience");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div className="sidebar relative flex flex-col rounded-[10px] ml-5 min-w-[150px] max-w-[150px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] "></div>
      <div className="menu-options h-full w-full mt-10 flex flex-col">
        <div className="menu-offset">
        <button className="menu-option" onClick={scrollToAboutMe}>
            <b>About me</b>
          </button>
          <button className="menu-option" onClick={scrollToProjects}>
            <b>Projects</b>
          </button>
          
          <button className="menu-option" onClick={scrollToContact}>
            <b>Contact info</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

//add this
/*<button className="menu-option" onClick={scrollToEducation}>
    <b>Education</b>
  </button>
  <button className="menu-option" onClick={scrollToExperiences}>
    <b>Experiences</b>
  </button>
*/