import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 bg-green-200 p-2 rounded-lg">Contact Me</h2>

      
      <div className="flex flex-col md:flex-row items-start  justify-center md:justify-evenly gap-6 items-center text-lg text-gray-700 ">

        <a href="mailto:krishnaprabhurkp@gmail.com"
          className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300" >
          <FaEnvelope className="text-2xl" />
          krishnaprabhurkp@gmail.com
        </a>

        <a href="tel:+916383126917"
          className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300" >
          <FaPhone className="text-2xl rotate-180"  />
          +91 6383126917
        </a>

        <a href="https://www.linkedin.com/in/krishnaprabhu-r-997b58275"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300" >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Contact;
