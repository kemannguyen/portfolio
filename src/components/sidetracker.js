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
    if (scrollValue < projPos - 120) {
      setAbo(true);
      //setEdu(false);
      setProj(false);
      //setExp(false);
    } else/* if (scrollValue > projPos - 120 && scrollValue < eduPos - 120)*/ {
      setAbo(false);
      //setEdu(false);
      setProj(true);
      //setExp(false);
    } //else if (scrollValue > eduPos - 120 && scrollValue < expPos - 120) {
    //   setAbo(false);
    //   setEdu(true);
    //   setProj(false);
    //   setExp(false);
    // } else if (scrollValue > expPos - 120) {
    //   setAbo(false);
    //   setEdu(false);
    //   setProj(false);
    //   setExp(true);
    // }
  }, [scrollValue, projPos]);

  const updateIcons = () => {
    if (scrollValue < projPos - 120) {
      setAbo(true);
      //setEdu(false);
      setProj(false);
   } else /*if (scrollValue > projPos - 120 && scrollValue < eduPos - 120) */{
      setAbo(false);
      //setEdu(false);
      setProj(true);
   }
    // } else if (scrollValue > eduPos - 120) {
    //   setAbo(false);
    //   setEdu(true);
    //   setProj(false);
    //   setExp(false);
    // }
  };

  //use when finding compoment scroll values

  //console.log(scrollValue);

  //671 .> 740, -840 (69)
  //854 -> 910, -1010   (56)
  //needs to have margin top and marginBot - at balance 100 between them
  //ex mt 200, mb-300
  if (aboPos && projPos) {
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
        {/* <div
          className={atEducation ? "stick" : "nonstick"}
          style={{
            marginTop: eduPos - 29,
          }}
        >
          <button className="logo relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-white">
            <div className="contact-btn-fill relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
              {" "}
              <svg
                style={{ marginTop: -7, marginLeft: -15 }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"
                  fill="white"
                ></path>{" "}
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"
                  fill="white"
                ></path>{" "}
              </svg>
            </div>
          </button>
        </div> */}
        {/* <div
          className={atExperience ? "stick" : "nonstick"}
          style={{ marginTop: expPos - 29 }}
        >
          {" "}
          <button className="logo relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-white">
            <div className="contact-btn-fill  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
              {" "}
              <svg
                style={{ marginLeft: -15, marginTop: -5 }}
                viewBox="0 0 24 24"
                fill="round"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                ></path>{" "}
              </svg>
            </div>
          </button>
        </div> */}
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
  }
};

export default Sidetracker;

// <div
//   className={atProject ? "stick" : "nonstick"}
//   style={{ marginTop: projPos - 70 }}
// >

// </div>;
