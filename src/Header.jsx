import React from "react";
import logo from "./face.png";
const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <h2>Meme Generator</h2>
      </header>
    </>
  );
};

export default Header;
