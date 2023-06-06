// //
// import React from "react";

// const Portfolio = ({ project }) => {
//     const { title, description, technologies, imageUrl, website } = project;

//     return (
//         <div className="bg-white rounded-lg shadow-md p-6 mt-8">
//             <div className="max-w-sm mx-auto">
//                 <img
//                     src={imageUrl}
//                     alt={title}
//                     className="w-300 h-400 rounded-lg mb-4"
//                 />
//                 <div className="text-center">
//                     <h3 className="text-xl font-bold mb-2">{title}</h3>
//                     <p className="text-gray-600 mb-4">{description}</p>
//                     <ul className="flex flex-wrap justify-center gap-2">
//                         {technologies.map((tech, index) => (
//                             <li
//                                 key={index}
//                                 className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
//                             >
//                                 {tech}
//                             </li>
//                         ))}
//                     </ul>
//                     <a
//                         href={website}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block mt-6 bg-gray-900 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
//                     >
//                         Visit Website
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Portfolio;

import React from "react";

const Portfolio = ({ project }) => {
    const { title, description, technologies, imageUrl, website } = project;

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <div className="max-w-sm mx-auto">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-150 h-auto rounded-lg mb-4"
                />
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex flex-wrap justify-center mb-4">
                        <h4 className="text-lg font-semibold mr-2">
                            Technologies Used:
                        </h4>
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="inline-block bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 mb-2"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-900 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition-colors duration-300"
                    >
                        Visit Website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
