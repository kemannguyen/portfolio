import React from "react";
import "../styles/listitem.css";

const ListItem = ({ title, detail, startyear, endyear, desc }) => {
  return (
    <div className="listitem-container">
      <div className="listitem-div">
        <span className="listitem-title">{title}</span>
        <span className="listitem-program">- {detail}</span>
        <span className="body-text">
          {" "}
          {startyear} - {endyear}
        </span>
      </div>
      <span className="body-text listitem-body">{desc}</span>
    </div>
  );
};

export default ListItem;
