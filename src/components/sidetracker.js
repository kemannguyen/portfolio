import React, { useState, useEffect } from "react";
import "../styles/sidetracker.css";

const Sidetracker = ({ projPos, eduPos, aboPos, expPos }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [atProject, setProj] = useState(true);
  const [atAboutMe, setAbo] = useState(false);
  //const [atEducation, setEdu] = useState(false);
  //const [atExperience, setExp] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {
    //changes to new side icon when scolling past the title
    if (scrollValue < aboPos - 120) {
      setAbo(false);
      setProj(true);
    } else {
      setAbo(true);
      setProj(false);
    }
  }, [scrollValue, aboPos]);

  const updateIcons = () => {
    if (scrollValue < aboPos - 120) {
      setAbo(false);
      setProj(true);
    } else {
      setAbo(true);
      setProj(false);
    }
  };

  //use when finding compoment scroll values

  //console.log(scrollValue);

  //671 .> 740, -840 (69)
  //854 -> 910, -1010   (56)
  //needs to have margin top and marginBot - at balance 100 between them
  //ex mt 200, mb-300

  return (
    <div onResize={updateIcons}>
      <div
        className={atAboutMe ? "stick" : "nonstick"}
        style={{ marginTop: aboPos - 29 }}
      >
        {" "}
        <button className="logo relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-white">
          <div className="contact-btn-fill  relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md">
            {" "}
            <svg
              style={{ marginTop: -11.6, marginLeft: -22.8 }}
              width="90"
              height="90"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 32 32"
            >
              {" "}
              <path
                d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                fill="white"
              ></path>{" "}
              <path
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                fill="white"
              ></path>{" "}
            </svg>
          </div>
        </button>
      </div>
      <div
        className={atProject ? "stick" : "nonstick"}
        style={{
          marginTop: projPos - 20,
        }}
      >
        <button className="logo relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-white">
          <div className="contact-btn-fill relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md">
            {" "}
            <svg
              style={{ marginLeft: -15, marginTop: -4 }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-code"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"
                fill="white"
              ></path>{" "}
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidetracker;
