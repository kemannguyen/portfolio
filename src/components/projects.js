import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import { ProjectData } from "./projectdata";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let tempIndex = index + 1;
    if (tempIndex > ProjectData.length - 1) {
      tempIndex = 0;
    }
    setIndex(tempIndex);
  };
  const handleBack = () => {
    let tempIndex = index - 1;
    if (tempIndex < 0) {
      tempIndex = ProjectData.length - 1;
    }
    setIndex(tempIndex);
  };

  return (
    <div id="projects" className="section">
      <div className="title">Projects</div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          color: "gray",
          fontSize: 15,
        }}
      >
        {index + 1}/{ProjectData.length}
      </span>
      <div className="image-slider">
        <button
          type="button"
          className="image-button-l text-white bg-[#d1d1d1] hover:bg-[#24292F]/90 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          onClick={handleBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            transform="scale(3.0)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <img className="image-view" src={ProjectData[index].img} alt="image" />
        <button
          type="button"
          className="image-button-r text-white bg-[#d1d1d1] hover:bg-[#24292F]/90 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            transform="scale(3.0)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <h1 className="project-title">{ProjectData[index].name}</h1>
      <div
        style={{
          flexDirection: "row",
          maxWidth: "60vw",
          marginLeft: "17vw",
          marginRight: "50vw",
          display: "flex",
        }}
      >
        <b className="project-desc" style={{ flex: 1 }}>
          {ProjectData[index].description}
        </b>
      </div>
    </div>
  );
};

export default Projects;
