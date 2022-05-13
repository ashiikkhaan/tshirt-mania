import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Welcome to tshirt mania (Header Component)</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/orderreview">Order Review</Link>
        <Link to="/grandpa">Grandpa</Link>
      </nav>
    </div>
  );
};

export default Header;
