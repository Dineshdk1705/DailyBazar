import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full h-18 p-3 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
