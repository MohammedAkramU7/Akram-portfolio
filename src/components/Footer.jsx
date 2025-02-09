import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";



const Footer = () => {
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Mohd Akram Uddin</h2>
            <p className="text-gray-400">Web Developer | ReactJs Developer | MERN Stack developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</a>
            <a href="/aboutme" className="text-gray-400 hover:text-blue-400 transition duration-300">About</a>
            <a href="latest-works" className="text-gray-400 hover:text-blue-400 transition duration-300">Work</a>
            <a href="/contact-me" className="text-gray-400 hover:text-blue-400 transition duration-300">Contact</a>
            
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://www.linkedin.com/in/mohammed-akram-uddin-khan-59849a185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/MohammedAkramU7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/Akram1466302"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:mohdakramu7@example.com"
              className="text-gray-400 hover:text-red-400 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Mohd Akram Uddin. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
