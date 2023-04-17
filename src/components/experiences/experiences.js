import { useRef, useState, useEffect } from "react";
import Experiencelist from "./experiencelist";

const Experiences = ({ setExpPosPC }) => {
  const boxRef4 = useRef();

  // Y
  const [y, setY] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    const y = boxRef4.current.offsetTop;
    setY(y);
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  });

  function UpdateY(y) {
    useEffect(() => {
      setExpPosPC(y);
    });
  }
  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);
  return (
    <div id="experience" className="section">
      <div className="title" ref={boxRef4} onResize={UpdateY(y)}>
        Experiences
      </div>
      <Experiencelist />
    </div>
  );
};

export default Experiences;
