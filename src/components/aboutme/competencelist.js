import React from "react";
import { CompentenceDataLang, CompentenceDataSkills } from "./competencedata";
import CompetenceListItem from "./competencelistitem";

const CompetenceList = () => {
  return (
    <div>
      <h3 className="competence-subhead">Languages</h3>
      {CompentenceDataLang.map((competence) => {
        return (
          <div key={competence.name}>
            <CompetenceListItem
              name={competence.name}
              percent={competence.percent}
            />
          </div>
        );
      })}
      <br></br>
      <h3 className="competence-subhead">Skills</h3>
      {CompentenceDataSkills.map((competence) => {
        return (
          <div key={competence.name}>
            <CompetenceListItem
              name={competence.name}
              percent={competence.percent}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompetenceList;
