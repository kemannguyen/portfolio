import React from "react";
import { ExperienceData } from "./experiencesdata";
import ListItem from "../listItem";

const Experiencelist = () => {
  return (
    <div>
      {" "}
      {ExperienceData.map((experience) => {
        return (
          <div key={experience.title}>
            <ListItem
              title={experience.title}
              detail={experience.detail}
              startyear={experience.startyear}
              endyear={experience.endyear}
              desc={experience.description}
            />
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default Experiencelist;
