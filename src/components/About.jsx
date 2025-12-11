import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-6 max-w-full">
      
      <h2 className="text-4xl font-bold mb-6 text-center bg-green-200 p-2 rounded-lg ">
        About Me
      </h2>

      <p className="text-lg text-gray-700 leading-8 italic mx-auto max-w-4xl font-semibold mt-10">
      Dedicated and self-motivated full-stack developer with a strong foundation in web development, backed by a B.E. in Computer Science Engineering and a MERN Stack Certification. I have hands-on experience building modern, scalable, and user-friendly applications with clean UI, smooth UX, and secure backend workflows.

      I enjoy converting ideas into real projects, writing clean and maintainable code, and continuously improving my skills. My goal is to contribute to impactful projects that are scalable, secure, and aligned with user needs.
      </p>


      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 bg-green-200 p-2 rounded-lg">Technical Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center mt-20">

          
          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <FaReact className="text-blue-500 text-4xl sm:text-5xl md:text-6xl" />
            
            <p className="mt-2 font-medium">React.js</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <SiJavascript className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">JavaScript</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <FaNodeJs className="text-green-500 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">Node.js</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <SiExpress className="text-gray-800 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">Express.js</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <SiMongodb className="text-green-500 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">MongoDB</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <SiNextdotjs className="text-black-500 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">Next.js</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <SiTypescript className="text-blue-500 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">TypeScript</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <SiTailwindcss className="text-cyan-500 text-4xl sm:text-5xl md:text-6xl" />
            <p className="mt-2 font-medium">Tailwind CSS</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
