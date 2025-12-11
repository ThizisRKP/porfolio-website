import { FaDownload } from "react-icons/fa";
import logo from "../assets/rkp-logo.png"

function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow- z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src={logo} alt="rkp-logo" style={{width :"6rem"}}/>

       
        <ul className="hidden md:flex flex-1 justify-center font-medium space-x-20 ">
          <li><a href="#hero" className="hover:text-blue-600 font-bold text-lg  shadow">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 font-bold text-lg  shadow">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 font-bold text-lg  shadow">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 font-bold text-lg  shadow">Contact</a></li>
        </ul>

        
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <FaDownload /> Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
