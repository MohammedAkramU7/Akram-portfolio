import React from "react";
import { X } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AboutMe from "./Aboutme";





const AboutPopup = ({ onClose }) => {
    const navigate = useNavigate();
  
    const aboutme = () => {

        navigate("/aboutme");
    }



    return (
        <div className=" fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center item-center ">
            <div className="mt-10 flex flex-col gap-2 w-160 ">
                <button onClick={onClose} className="place-self-end cursor-pointer">
                    <X size={30} />
                </button>

                <div className="bg-zinc-800 rounded-xl flex flex-col gap-5 item-center mx-4">
                    <div className="text-center">
                        <motion.h1
                            className="text-4xl font-bold mb-2"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hi, I'm <span className="text-blue-500 bg-ingigo-950]">Mohd Akram Uddin</span>
                        </motion.h1>
                        <p className="text-gray-300 text-lg text-center max-w-2xl">
                        A passionate React and MERN Stack Developer. I love building scalable, user-friendly, and efficient web applications
                        </p>

                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {[
                                    "React.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "ExpressJS","HTML","CSS","bootstrap", "JavaScript", "Wordpress", "AWS", "Jenkins", "HTML", "CSS"
                                ].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-blue-600 rounded-full text-sm shadow-lg hover:bg-blue-500 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-4xl font-bold mb-4">MERN STACK</h2>
                            <div className="flex justify-center item-center gap-5">
                                <div className="mongodb-icon">
                                    <div className="tooltip">MongoDB</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#47A248" stroke="none">
                                        <path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0s-.38.939-.733 1.432c-.32.699-3.299 2.526-4.562 8.086-.974 5.69 1.866 9.181 3.388 10.599.016.018.026.035.044.054.377.344.691.57.797.645.157.186.292.405.349.662.184.821.053 2.522.053 2.522l.644-.215s-.041-1.756.4-2.779c.287-.209 1.412-1.071 2.514-2.526.319-.42.634-.889.926-1.405 0-.001 0-.001 0-.001.733-1.295 1.319-2.889 1.428-4.756v-.009c.022-.371.026-.752.006-1.144z"></path>
                                    </svg>
                                    <h2 style={{ color: "#47a248" }}>M</h2>
                                </div>
                                <div className="express-icon">
                                    <div className="tooltip">Express.JS</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50">
                                        <g fill="#ffff">
                                            <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795z"></path>
                                        </g>
                                    </svg>
                                    <h2>E</h2>
                                    
                                </div>
                                
                                <div className="react-icon">
                                    <div className="tooltip">React.JS</div>
                                    
                                    
                                    
                                    <svg width="50" height="50" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#61dafb">
                                            <circle cx="420" cy="300" r="45" />
                                        </g>
                                    </svg>
                                    
                                    <h2>R</h2>
                                </div>
                                <div className="react-icon">
                                    <div className="tooltip">Note</div>
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 256 282"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMinYMin meet"
                                    >
                                        <g fill="#8CC84B">
                                            <path
                                                d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"
                                            ></path>
                                            <path
                                                d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <h2>N</h2>
                                    
                                </div>
                                
                            </div>
                            <button onClick={aboutme} className="ml-2 px-4 py-2 bg-blue-600 rounded-full text-sm shadow-lg hover:bg-blue-500 transition">More</button>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutPopup;
