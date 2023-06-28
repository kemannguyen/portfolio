import { useRef, useState, useEffect } from "react";
import Educationlist from "./educationlist";

const Eductation = ({ setEduPosPC }) => {
  // THis ref will be connected to the orange box
  const boxRef = useRef();

  // Y
  const [y, setY] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    try{
    const y = boxRef.current.offsetTop;
    setY(y);
    }catch(e){
      ;
    }
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  });

  function UpdateY(y) {
    useEffect(() => {
      setEduPosPC(y);
    });
  }
  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);
  return (
    <div id="education" className="section">
      <div className="title" ref={boxRef} onResize={UpdateY(y)}>
        Eductation
      </div>
      <Educationlist />
    </div>
  );
};

export default Eductation;
