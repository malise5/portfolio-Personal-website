import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-gray-900 text-white py-20 mt-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[20%] mr-10">
                        <img
                            src="./kude.jpeg"
                            alt="Profile"
                            className="w-200 h-200 md:mx-0 md:mr-8 rounded-full shadow-xl"
                        />

                        <ul className="flex flex-col justify-start items-center mt-8 space-y-4">
                            <li className="flex items-center">
                                <a
                                    href="mailto:halkanomalise@gmail.com"
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                    <FaEnvelope
                                        size={24}
                                        className="text-blue-500 hover:text-white transition duration-300"
                                    />
                                </a>
                                <span className="ml-2">
                                    halkanomalise@gmail.com
                                </span>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="https://linkedin.com/in/halkano-malise-4262bab6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-500 transition duration-300  hover:scale-110 border-transparent border-2 rounded-full p-1 hover:border-blue-500 hover:shadow-lg"
                                    title="Visit LinkedIn link"
                                >
                                    <FaLinkedin
                                        size={24}
                                        className="text-blue-500 hover:text-white transition duration-300"
                                    />
                                </a>
                                <span className="ml-2">Halkano Malise</span>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="https://github.com/malise5"
                                    className="text-gray-300 hover:text-blue-500 transition duration-300  hover:scale-110 border-transparent border-2 rounded-full p-1 hover:border-blue-500 hover:shadow-lg"
                                    title="Visit GitHub Link"
                                >
                                    <FaGithub
                                        size={24}
                                        className="text-blue-500 hover:text-white transition duration-300"
                                    />
                                </a>
                                <span className="ml-2">GitHub: malise5</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-3/4 mt-5 ml-5 md:mt-0">
                        <h1 className="text-4xl font-bold mb-4">
                            Halkano Malise
                        </h1>
                        <p className="text-lg mb-6">
                            I am an aspiring Data Scientist, Web
                            Developer/Software Engineer, and a self taught Full
                            Stack Web Development program. My skillset includes
                            React, JavaScript, Express/Node.js, HTML/CSS, and
                            Python/Flask. I am a tenacious user advocate and I
                            derive great satisfaction from being able to build
                            websites, analyze data, and develop apps that
                            exhibit good Software design and fulfill a need.
                        </p>
                        <p className="text-lg mb-4">
                            In 2022, I broke free from professional stagnation
                            and discovered my passion for Software Engineering
                            through the Odin-Project and Freecodecamp.
                            Transitioning from creating user experiences to
                            engineering solutions, I completed development
                            classes and tackled programme projects.
                        </p>
                        <p className="text-lg mb-4">
                            Now, I seek a position to amplify my impact, bring
                            dreams to life, and contribute to your team's
                            success. Let's connect and create captivating,
                            inspiring, and transformative experiences together.
                            If you have any questions or would like to connect,
                            please feel free to reach out to me. I look forward
                            to hearing from you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
