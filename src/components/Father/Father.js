import React from "react";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";
import "./Father.css";

const Father = ({ house, ornament }) => {
  return (
    <div>
      <h3>Father</h3>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        <Myself house={house} ornament={ornament}></Myself>
        <Sister house={house}></Sister>
        <Brother house={house}></Brother>
      </div>
    </div>
  );
};

export default Father;
