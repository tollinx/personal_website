import React from "react";
import am_logo from "./../assets/AM_logo.webp";
import deloitte_logo from "./../assets/deloitte_logo.avif";
import pfas_sources from './../assets/pfas_sources.png';

const ExperienceGrid = () => {
  const experiences = [
    {
      id: 1,
      company: "Deloitte",
      title: "Analyst - Software Developer",
      date: "July 2024 - Present",
      description: `
        I'm creating the backend of a performance management platform for a military health client.
        This tool has A LOT of data, so I'm designing database tables to store over 200 performance metrics and developing new APIs that return that data for different pages!
        
      `,
      image: deloitte_logo,
      link: "https://www2.deloitte.com/us/en/pages/about-deloitte/articles/about-deloitte.html",
      skills: "https://github.com/tollinx/OrcaCoinJS" 
    },
    {
      id: 2,
      company: "Allied Microbiota",
      title: "Bioinformatics Engineer",
      date: "July 2023 - July 2024",
      description: `Cancer Research. 
                    PFAS is a common carcinogen found our everyday items, one of Allied Microbiota's innovative goals
                    is bioprospecting bacterial genes that can degrade PFAS!
                    With the power of 100k Google Cloud Credits, 
                    I used various bioinformatic libraries, NCBI's genbank, and code from previous researchers 
                    to cleanse 3 TB of bacterial genes and build a machine learning model to find these cancer destroying strains!
                    `,
      image: am_logo,
      link: "https://alliedmicrobiota.com/"
      // https://github.com/YunxiaoRen/ML-iAMR
    },
  ];

  return (
    <section id="experiences" className="">
    <div className="container mx-auto">
      <h2 className="text-sm md:text-lg lg:text-4xl text-charcoal dark:text-white font-bold text-left mb-8">Places I've worked at</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition animate-fadeIn"
          >
            <a
              href={experience.link}
              className="text-blue-500 hover:text-teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-4xl font-bold">{experience.company}</h3>
            </a>
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <p className="text-gray-600 mb-4">{experience.date}</p>
            <p className="text-gray-600 mb-4">{experience.description}</p>
            
            <div className="mb-4">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-auto rounded-lg mb-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ExperienceGrid;
