import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Saath.io",
    description: "Contributed to the development of Sath.io, a user-friendly and free job portal facilitating seamless job searches for users. Played an integral role in creating the platform.",
    image: "https://myportfolio1950.netlify.app/assets/Screenshot_12-B7wk410r.png",
    link: "https://saath.io/",
  },
  {
    id: 2,
    title: "WPQuads",
    description: "Wpquads It's a WordPree plugin whose front-end UI is made with Reactjs, which helps you add multiple types of ads to your WordPress website.",
    image: "https://myportfolio1950.netlify.app/assets/Quads2-j1NOYv8T.png",
    link: "https://wpquads.com/",
  },
  {
    id: 3,
    title: "Project's",
    description: "To enhance my skills in front-end development. I have made multiple learning projects with React JS, and I have added my GitHub repository below.",
    image: "https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg",
    link: "https://github.com/MohammedAkramU7",
  },
];

const Work = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Latest Work
        </motion.h2>

        {/* Grid Layout for Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>

                {/* View More Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
