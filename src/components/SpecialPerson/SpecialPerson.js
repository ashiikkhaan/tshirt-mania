import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const SpecialPerson = ({ ornament }) => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>Ornament through context api: {ring}</p>
      <p>Ornament through props drilling: {ornament}</p>
    </div>
  );
};

export default SpecialPerson;
