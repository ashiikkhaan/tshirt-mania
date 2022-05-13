import React from "react";
import "./Brother.css";

const Brother = ({ house }) => {
  return (
    <div>
      <h4>Brother</h4>
      <p>
        <span>House: {house}</span>
      </p>
    </div>
  );
};

export default Brother;
