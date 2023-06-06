import React from "react";
import Portfolio from "./Portfolio";
import projectData from "../data/projectData";

const Projects = () => {
    console.log(projectData);
    return (
        <div className="container mx-auto py-10 p-20">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectData.map((project) => (
                    <Portfolio key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
