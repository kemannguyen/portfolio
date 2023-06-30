import React, { useEffect, useState, useRef } from "react";
import "../../styles/projects.css";
import { ProjectDataFS, ProjectDataGame, ProjectDataIllustration } from "./projectdata";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Projects = ({ setProjPosPC }) => {
  const [index, setIndex] = useState(0);
  const [textDesc, setTextDesc] = useState("");

  // THis ref will be connected to the orange box
  const boxRef2 = useRef();

  // Y
  const [y, setY] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    try{
    const y = boxRef2.current.offsetTop;
    setY(y);
    }catch(e){
      ;
    }
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  });

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  function UpdateY(y) {
    useEffect(() => {
      setProjPosPC(y);
    });
  }

  const handleNextFS = () => {
    let tempIndex = index + 1;
    if (tempIndex > ProjectDataFS.length - 1) {
      tempIndex = 0;
    }
    setIndex(tempIndex);
  };
  const handleNextGame = () => {
    let tempIndex = index + 1;
    if (tempIndex > ProjectDataGame.length - 1) {
      tempIndex = 0;
    }
    setIndex(tempIndex);
  };
  const handleNextIllustration = () => {
    let tempIndex = index + 1;
    if (tempIndex > ProjectDataIllustration.length - 1) {
      tempIndex = 0;
    }
    setIndex(tempIndex);
  };

  const handleBackFS = () => {
    let tempIndex = index - 1;
    if (tempIndex < 0) {
      tempIndex = ProjectDataFS.length - 1;
    }
    setIndex(tempIndex);
  };
  const handleBackGame = () => {
    let tempIndex = index - 1;
    if (tempIndex < 0) {
      tempIndex = ProjectDataGame.length - 1;
    }
    setIndex(tempIndex);
  };
  const handleBackIllustration = () => {
    let tempIndex = index - 1;
    if (tempIndex < 0) {
      tempIndex = ProjectDataIllustration.length - 1;
    }
    setIndex(tempIndex);
  };

  const openLinkInNewTab = (url) => {
    try{
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) newTab.opener = null;
    }
    catch(e){
      ;
    }
  };
  
  useEffect(() => {
    if(value == 0){
      setTextDesc(ProjectDataFS[index].description);
    }
    else if(value == 1){
      setTextDesc(ProjectDataGame[index].description);
    }
    if (textDesc) {
      document.getElementById("proj-desc").innerHTML = textDesc;
    }
  });
  
  //tabs
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIndex(0);
  };
  
  let liveBtn;
  if(value == 0){
  if(ProjectDataFS[index].githublink != ""){
  liveBtn = ( <button
    type="button"
    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
    onClick={() => openLinkInNewTab(ProjectDataFS[index].githublink)}
  >
    Live version
  </button>)}else{
    liveBtn = <div></div>
  }
}

    
  let projectComp;

  if(value == 0){
  projectComp = (
    <div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          color: "gray",
          fontSize: 15,
        }}
      >
        {index + 1}/{ProjectDataFS.length}
      </span>
        <div className="image-slider">
        <button
          type="button"
          className="image-button-l text-white bg-[#24292F] hover:bg-[#d1d1d1] focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#d1d1d1]/30 mr-2 mb-2"
          onClick={handleBackFS}
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
        <img className="image-view" src={ProjectDataFS[index].img} alt="image" />
        <button
          type="button"
          className="image-button-r text-white bg-[#24292F] hover:bg-[#d1d1d1] focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#d1d1d1]/30 mr-2 mb-2"
          onClick={handleNextFS}
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
      <div className="project-container">
        <span className="project-title">{ProjectDataFS[index].name}</span>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <b id="proj-desc" className="project-desc" style={{ flex: 1 }}>
          </b>
        </div>
        <div
          style={{
            maxWidth: "40.5vw",
            marginLeft: "12vw",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
         {liveBtn}
        </div>
      </div>
    </div>)
  }else if(value ==1){
    projectComp = (<div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          color: "gray",
          fontSize: 15,
        }}
      >
        {index + 1}/{ProjectDataGame.length}
      </span>
        <div className="image-slider">
        <button
          type="button"
          className="image-button-l text-white bg-[#24292F] hover:bg-[#d1d1d1] focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#d1d1d1]/30 mr-2 mb-2"
          onClick={handleBackGame}
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
        
        <img className="image-view" src={ProjectDataGame[index].img} alt="image" />
        <button
          type="button"
          className="image-button-r text-white bg-[#24292F] hover:bg-[#d1d1d1] focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#d1d1d1]/30 mr-2 mb-2"
          onClick={handleNextGame}
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
      <div className="project-container">
        <h1 className="project-title">{ProjectDataGame[index].name}</h1>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <b id="proj-desc" className="project-desc" style={{ flex: 1 }}>
          </b>
        </div>
        <div
          style={{
            maxWidth: "40.5vw",
            marginLeft: "12vw",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            onClick={() => openLinkInNewTab(ProjectDataGame[index].githublink)}
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            See more
          </button>
        </div>
      </div>
    </div>)
  }else if(value ==2){
    projectComp = (<div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          color: "gray",
          fontSize: 15,
        }}
      >
        {index + 1}/{ProjectDataIllustration.length}
      </span>
        <div className="image-slider">
        <button
          type="button"
          className="image-button-l text-white bg-[#24292F] hover:bg-[#d1d1d1] focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#d1d1d1]/30 mr-2 mb-2"
          onClick={handleBackIllustration}
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
        
        <img className="image-view" src={ProjectDataIllustration[index].img} alt="image" />
        <button
          type="button"
          className="image-button-r text-white bg-[#24292F] hover:bg-[#d1d1d1] focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#d1d1d1]/30 mr-2 mb-2"
          onClick={handleNextIllustration}
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
      <div className="project-container">
        <h1 className="project-title">{ProjectDataIllustration[index].name}</h1>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <b id="proj-desc" className="project-desc" style={{ flex: 1 }}>
          </b>
        </div>
        <div
          style={{
            maxWidth: "40.5vw",
            marginLeft: "12vw",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
        </div>
      </div>
    </div>)
  }

  

  return (
    <div id="projects" className="section">
      <div className="title" ref={boxRef2} onResize={UpdateY(y)}>
        Projects
      </div>
      <div className="introduction-container">
        <span className="body-text ">
          {/*I am a passionate fullstack developer, game developer and illustrator.*/}
          I am thrilled you’ve come to visit my showcase of work that I’ve
          compiled over the years, which includes a combination of
          collaborations, commissioned work and personal projects.
          Take a look and feel free to get in touch if you’d like to
          discuss potential opportunities to work together.
        </span>
      </div>
      <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{mt: '60px'}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fullstack" sx={{ color: 'white', ml: 'auto' }}/>
          <Tab label="Game" sx={{ color: 'white'}}/>
          <Tab label="Illustrator" sx={{ color: 'white',  mr: 'auto' }}/>
        </Tabs>
      </Box>
    </Box>
    {projectComp}
      
    </div>
  );
};

export default Projects;
