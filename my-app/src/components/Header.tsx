"use client";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
