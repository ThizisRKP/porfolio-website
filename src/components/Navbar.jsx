import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/rkp-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <img src={logo} alt="rkp-logo" style={{ width: "6rem"  }} />

        
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes style={{color : "red"}} /> : <FaBars style={{color : "#231f20"}}/>}
        </div>

        
        <ul className="hidden md:flex flex-1 justify-center font-medium space-x-20 ">
          <li><a href="#hero" className="hover:text-blue-600 font-bold text-lg">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 font-bold text-lg">About</a></li>
          <li><a href="#education" className="hover:text-blue-600 font-bold text-lg">Education</a></li>
          <li><a href="#projects" className="hover:text-blue-600 font-bold text-lg">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 font-bold text-lg">Contact</a></li>
        </ul>

        
        {open && (
          <ul className="absolute top-20 left-0 w-full bg-white shadow md:hidden flex flex-col items-center py-6 space-y-6 text-lg font-bold">
            <a onClick={() => setOpen(false)} href="#hero">Home</a>
            <a onClick={() => setOpen(false)} href="#about">About</a>
            <a onClick={() => setOpen(false)} href="#education">Education</a>
            <a onClick={() => setOpen(false)} href="#projects">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact">Contact</a>
          </ul>
        )}

      </div>
    </nav>
  );
}

export default Navbar;


