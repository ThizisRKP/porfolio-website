import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-6 max-w-full">
      
      <h2 className="text-4xl font-bold mb-6 text-center bg-green-200 p-2 rounded-lg">
        About Me
      </h2>

      <p className="text-xl text-gray-700 leading-8 italic mx-auto max-w-4xl font-semibold">
      Dedicated and self-motivated individual with a strong foundation in full-stack web development, backed by a Bachelor's degree in Computer Science Engineering with a 7.7 CGPA. Along with my academics, I have successfully completed a MERN Stack Web Development Certification Course, which strengthened my abilities in building modern, scalable, and user-friendly web applications.

      I have hands-on experience in developing full-stack projects that focus on clean UI, smooth user experience, efficient backend logic, and secure authentication workflows. I enjoy turning ideas into real-world applications, following best practices, and writing clean, maintainable code.

      I am passionate about continuous learning, improving my development skills, and contributing to impactful projects as part of a collaborative team or as an independent developer. My goal is to deliver solutions that are scalable, secure, and aligned with user needs.
      </p>

      
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 bg-green-200 p-2 rounded-lg">Technical Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center mt-20">

          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <FaReact className="text-blue-500 text-6xl" />
            <p className="mt-2 font-medium">React.js</p>
          </div>
          
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <SiJavascript className="text-yellow-500 text-6xl" />
            <p className="mt-2 font-medium">JavaScript</p>
          </div>

          
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <FaNodeJs className="text-green-600 text-6xl" />
            <p className="mt-2 font-medium">Node.js</p>
          </div>

          
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <SiExpress className="text-gray-800 text-6xl" />
            <p className="mt-2 font-medium">Express.js</p>
          </div>

         
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <SiMongodb className="text-green-700 text-6xl" />
            <p className="mt-2 font-medium">MongoDB</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <SiNextdotjs className="text-black text-6xl" />
            <p className="mt-2 font-medium">Next.js</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <SiTypescript className="text-blue-600 text-6xl" />
            <p className="mt-2 font-medium">TypeScript</p>
          </div>


       
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <SiTailwindcss className="text-cyan-500 text-6xl" />
            <p className="mt-2 font-medium">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
