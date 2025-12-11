import { motion } from "framer-motion";
import img from "../assets/krishnaprabhu.jpg"

function Hero() {
  return (
    <section
  id="hero"
  className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white px-6 pt-32 md:pt-40"
>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-11">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold mb-4">
            Hello! , I'm <span className="text-blue-600">Krishnaprabhu </span>
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            <b className="italic">MERN Stack Developer | Frontend & Backend Enthusiast | Problem Solver | Freelancer</b>
          </p>

          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Explore My Works
          </a>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
  src={img}
  alt="Krishnaprabhu-img"
  className="w-56 h-56 md:w-72 md:h-72 object-cover object-conatin mx-auto px-4 rounded-full shadow-lg"
/>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
