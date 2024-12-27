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
    <section 
    className="py-12 bg-beige dark:bg-teal"
    >
      <div 
      className="container mx-auto px-4 space-y-48"
      >
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          >
            {/* Image Section */}
            <div>
              <img
                src={experience.image}
                alt={experience.title}
              />
            </div>

            

            {/* Case Number and Text Section */}
            <div className="sm:col-span-1 sm:col-span-1 lg:col-span-2 space-y-4">
            <p className="animate-ping absolute inline sm:xs m:s lg:text-m uppercase text-charcoal dark:text-beige">
                ●
              </p>
              <p className="inline p-8 sm:xs m:s lg:text-m uppercase text-charcoal dark:text-beige">
                {experience.company}
              </p>
              <h2 className="sm:s m:l lg:text-2xl font-bold text-charcoal dark:text-beige">
                {experience.title}
              </h2>
              <p className="sm:xs m:l lg:text-2xl text-charcoal dark:text-beige">
                {experience.description}
              </p>
              <a
                href={experience.link}
                className="inline-block px-6 py-2 sm:xs m:l lg:text-2xl font-medium text-white bg-green rounded-lg shadow hover:bg-yellow transition"
              >
                More about this company →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default ExperienceGrid;
