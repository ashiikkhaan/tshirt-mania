import React from "react";
import SpecialPerson from "../SpecialPerson/SpecialPerson";

const Myself = ({ house, ornament }) => {
  return (
    <div>
      <h4>Myself </h4>
      <p>
        <span>House: {house}</span>
      </p>
      <SpecialPerson ornament={ornament}></SpecialPerson>
    </div>
  );
};

export default Myself;
