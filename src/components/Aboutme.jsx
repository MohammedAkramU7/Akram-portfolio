import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Akram from '../assets/akram.jpg'
import akram from '../assets/akram.pdf'

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-12">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Hi, I'm <span className="text-blue-400">Mohd Akram Uddin</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 leading-relaxed mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            A passionate React and MERN Stack Developer. I love building scalable, user-friendly, and efficient web applications
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start space-x-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <a href="https://github.com/MohammedAkramU7" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white text-3xl transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-akram-uddin-khan-59849a185/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 hover:text-white text-3xl transition duration-300" />
            </a>
            <a href="https://x.com/Akram1466302" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-white text-3xl transition duration-300" />
            </a>
            <a href="mailto:mohdakramU7@example.com">
              <FaEnvelope className="text-red-400 hover:text-white text-3xl transition duration-300" />
            </a>
          </motion.div>

          {/* Download Resume Button */}
          <motion.a
            href={akram}
            download
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg font-semibold transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Download Resume
          </motion.a>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img
            src={Akram}
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Tech Stack & Skills</h2>
        <p className="text-gray-400 text-lg mb-6">
          React.js | MongoDB | Express.js | Node.js | Tailwind CSS | bootstrap | AWS | Jenkins | WordPress | JavaScript
        </p>

        {/* Skill Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.7 }}
        >
          {["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "bootstrap", "AWS", "Jenkins","Wordpress", "HTML", "CSS", "JavaScript"].map(
            (skill, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-lg text-white text-lg font-semibold shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
