import React from "react";
import resumeData from "../data/resumeData";

const Resume = () => {
    const { workExperience, education, leadershipExperience, skillsInterests } =
        resumeData;

    return (
        <div className="py-20 px-4 mt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-8">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            WORK EXPERIENCE
                        </h2>
                        {workExperience.map((experience, index) => (
                            <div key={index} className="mb-4">
                                <div className="text-lg font-bold">
                                    {experience.position}
                                </div>
                                <div className="text-gray-500 mb-2">
                                    {experience.company}, {experience.location}
                                </div>
                                <div className="text-gray-600 text-sm mb-2">
                                    {experience.startDate} -{" "}
                                    {experience.endDate}
                                </div>
                                <ul className="list-disc list-inside ml-4">
                                    {experience.highlights.map(
                                        (highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <div className="text-lg font-bold">
                                    {edu.degree}
                                </div>
                                <div className="text-gray-500 mb-2">
                                    {edu.university}, {edu.location}
                                </div>
                                <div className="text-gray-600 text-sm mb-2">
                                    {edu.graduationDate}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            LEADERSHIP EXPERIENCE
                        </h2>
                        {leadershipExperience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <div className="text-lg font-bold">
                                    {exp.position}
                                </div>
                                <div className="text-gray-500 mb-2">
                                    {exp.organization}, {exp.location}
                                </div>
                                <div className="text-gray-600 text-sm mb-2">
                                    {exp.startDate} - {exp.endDate}
                                </div>
                                {/* <p className="mb-2">{exp.description}</p> */}
                                <ul className="list-disc list-inside ml-4">
                                    {exp.description.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            SKILLS & INTERESTS
                        </h2>
                        <div className="mb-4">
                            <h3 className="font-bold">Skills:</h3>
                            <ul className="list-disc list-inside ml-4">
                                {skillsInterests.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Interests:</h3>
                            <ul className="list-disc list-inside ml-4">
                                {skillsInterests.interests.map(
                                    (interest, index) => (
                                        <li key={index}>{interest}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
