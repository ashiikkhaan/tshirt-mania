import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // conditional rendering options
  // 1. Element variable
  // 2. ternary operator condition ? true: false
  // 3. && operator
  // 4. || operator
  let command;
  if (cart.length === 0) {
    command = <h3>Pleade Add at least one item</h3>;
  } else if (cart.length === 1) {
    command = <h3>Please Add More</h3>;
  } else {
    command = (
      <h3>
        <small>Thanks for adding items</small>
      </h3>
    );
  }
  return (
    <div>
      <h2>Selected Items: {cart.length}</h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {cart.length === 0 || (
        <div>
          <p>You are buying</p>
        </div>
      )}
      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>are you goning to gift these? </p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Clear all</button>}
      {cart.length === 4 && <button>Review Order</button>}
    </div>
  );
};

export default Cart;
