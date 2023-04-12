import React from "react";

const CompetenceListItem = ({ name, percent }) => {
  return (
    <div>
      <span className="body-text">{name}</span>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: percent }}
        ></div>
      </div>
    </div>
  );
};
export default CompetenceListItem;
