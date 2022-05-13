import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tShirt, handleAddToCart }) => {
  const { name, picture, price } = tShirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <h3>Price: ${price}</h3>
      <button onClick={() => handleAddToCart(tShirt)}>Add to Cart </button>
    </div>
  );
};

export default Tshirt;
