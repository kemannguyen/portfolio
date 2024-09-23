import React from "react";
import { EducationData } from "./educationdata";
import ListItem from "../listItem";

const Educationlist = () => {
  return (
    <div>
      {" "}
      {EducationData.map((program) => {
        return (
          <div key={program.school}>
            <ListItem
              title={program.school}
              detail={program.program}
              startyear={program.startyear}
              endyear={program.endyear}
              desc={program.description}
            />
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
export default Educationlist;
