import { useState } from 'react';

export default function PortfolioButton() {
    const certifications = {
        "Google Cloud Digital Leader": "https://www.credential.net/35d5a623-8ac9-4340-9747-58bf5aab0818#acc.Xek1fNds",
    };

    const frameworks = ["React", "Django", "Flask"];
    const codingLanguages = ["Java", "Python", "JavaScript", "C", "MIPS", "OCaml"];
    const databases = ["SQL", "MongoDB"];
    const tools = ["Linux", "Git", "Bash"];
    const cloudPlatforms = ["Google Cloud", "AWS", "Azure"];

    return (
        <div className="flex justify-center items-center min-h-screen bg-beige dark:bg-teal">
            <div className="portfolio-container p-6 bg-white rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-2xl font-semibold text-charcoal mb-4">Skills & Certifications</h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Certifications Section */}
                    <div className="certifications mb-6">
                        <h2 className="text-xl font-medium text-charcoal mb-2">Certifications</h2>
                        <ul>
                            {Object.entries(certifications).map(([cert, url]) => (
                                <li key={cert}>
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {cert}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Frameworks Section */}
                    <div className="frameworks mb-6">
                        <h2 className="text-xl font-medium text-charcoal mb-2">Frameworks</h2>
                        <ul className="list-disc text-charcoal pl-6">
                            {frameworks.map((framework) => (
                                <li key={framework}>{framework}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Coding Languages Section */}
                    <div className="coding-languages mb-6">
                        <h2 className="text-xl font-medium text-charcoal mb-2">Coding Languages</h2>
                        <ul className="list-disc text-charcoal pl-6">
                            {codingLanguages.map((language) => (
                                <li key={language}>{language}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Databases Section */}
                    <div className="databases mb-6">
                        <h2 className="text-xl font-medium text-charcoal mb-2">Databases</h2>
                        <ul className="list-disc text-charcoal pl-6">
                            {databases.map((database) => (
                                <li key={database}>{database}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Section */}
                    <div className="tools mb-6">
                        <h2 className="text-xl font-medium text-charcoal mb-2">Other Tools</h2>
                        <ul className="list-disc text-charcoal pl-6">
                            {tools.map((tool) => (
                                <li key={tool}>{tool}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Cloud Platforms Section */}
                    <div className="cloud-platforms mb-6">
                        <h2 className="text-xl font-medium text-charcoal mb-2">Cloud Platforms</h2>
                        <ul className="list-disc text-charcoal pl-6">
                            {cloudPlatforms.map((platform) => (
                                <li key={platform}>{platform}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
