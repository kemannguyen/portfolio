import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Aboutme from "./components/aboutme/aboutme";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Eductation from "./components/education";
import Sidetracker from "./components/sidetracker";

const App = () => {
  const [eduPos, setEduPos] = useState(-100);
  const [projPos, setProjPos] = useState(-100);
  useEffect(() => {
    console.log("wow", eduPos);
  }, [eduPos]);
  useEffect(() => {
    console.log("proj", projPos);
  }, [projPos]);
  return (
    <>
      <Header />
      <Sidetracker eduPos={eduPos} projPos={projPos} />
      <Aboutme />
      <Eductation setEduPosPC={setEduPos} />
      <Projects setProjPosPC={setProjPos} />
      <Contact />
    </>
  );
};

export default App;
