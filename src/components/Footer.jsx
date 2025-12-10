import { FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-20 relative">
  <div className="text-center space-y-3">

    <p className="text-sm text-gray-400 font-semibold">
      © {new Date().getFullYear()} Krishnaprabhu. All Rights Reserved.
    </p>

    <button
  onClick={scrollToTop}
  className="
    absolute right-2 bottom-3 
    bg-gray-700 p-2 rounded-full 
    hover:bg-gray-600 transition

    sm:p-3   /* bigger on small and above */
  "
>
  <FaArrowUp className="text-lg sm:text-xl" />
</button>


  </div>
</footer>

    
  );
}

export default Footer;




