import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Eductation from "./components/education";
import Sidetracker from "./components/sidetracker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Sidetracker />
    <Aboutme />
    <Eductation />
    <Projects />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
