"use client";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import open from "public/assets/shared/icon-hamburger.svg";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <header>
      <Navbar />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "hidden" : ""
        } z-40 absolute right-6 top-8 md:hidden cursor-pointer animate-bounce`}
      >
        <Image src={open} alt="open" />
      </div>
      <Sidebar closeSidebar={closeSidebar} isOpen={isOpen} />
    </header>
  );
};

export default Header;
