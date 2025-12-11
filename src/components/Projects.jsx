import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Jwt-authendication",
      description:`Implemented a secure JWT-authenticated role-based access system (Admin/User) in MERN. Connected a
                  Netlify-deployed React UI with a Render backend for seamless full stack functionality..`,
      link: "https://github.com/ThizisRKP/express-jwt-authentication-CRUD",
    },
    {
      title: "Property-listings",
      description:`Built a responsive property-listing platform enabling users to browse, filter, and view detailed listing
                   information with image galleries. Implemented modular UI components, API data fetching, and
                   optimized state management`,
      link: "https://github.com/ThizisRKP/react-property-listings",
    },
    {
      title: "Wordle-game",
      description: `Developed a Wordle-style game in React with useState, featuring six attempts, input validation, and
feedback tiles for an interactive UI.`,
      link: "https://github.com/ThizisRKP/my-react-wordle-game",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 bg-green-200 p-2">Projects</h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-10 ">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg p-6 rounded-lg  my-10 bg-purple-400 italic"
          >
            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-gray-700 mb-4 semi-bold">{p.description}</p>

            <a
              href={p.link}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
