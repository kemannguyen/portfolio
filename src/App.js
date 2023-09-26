import React, { useState } from "react";
import Header from "./components/header";
import Aboutme from "./components/aboutme/aboutme";
import Projects from "./components/projects/projects";
import Contact from "./components/contact";
//import Eductation from "./components/education/education";
import Sidetracker from "./components/sidetracker";
//import Experiences from "./components/experiences/experiences";

const App = () => {
  //const [eduPos, setEduPos] = useState(-100);
  const [projPos, setProjPos] = useState(-100);
  const [aboPos, setAboPos] = useState(-100);
  //const [expPos, setExpPos] = useState(-100);
  return (
    <>
      <Header />
      <Sidetracker
        //neduPos={eduPos}
        projPos={projPos}
        aboPos={aboPos}
        // expPos={expPos}
      />
      <Aboutme setAboPosPC={setAboPos} />
      <Projects setProjPosPC={setProjPos} />
      {/* <Eductation setEduPosPC={setEduPos} />
      <Experiences setExpPosPC={setExpPos} /> */}
      <Contact />
    </>
  );
};

export default App;
