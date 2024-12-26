import React from "react";
import libp2p_overview_img from './../assets/Libp2p_diagram.png';
import pfas_sources from './../assets/pfas_sources.png';
import campAbilities from './../assets/campAbilities.jpg';
import roflex from './../assets/roflex.jpg';

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "OrcaCoin",
      description: "Block Chain. Built out a p2p network for nodes to communicate and trade ledgers to each other. Added SHA226 authentication. ",
      image: libp2p_overview_img,
      link: "https://github.com/tollinx/OrcaCoinJS"
    },
    {
      id: 2,
      title: "Cicaida",
      description:`
        Building a way to make medical assistants' lives easier with a central monitoring system for checking on patient's vitals. I start speaking at 1:26!
      `,
      video: "https://www.bme.cuhk.edu.hk/emedic/video/gp19.mp4",
      image: pfas_sources,
      link: "https://www.bme.cuhk.edu.hk/emedic/video/gp19.mp4"
    },
    {
      id: 3,
      title: "Q&A Platform",
      description: "I built an end to end Q&A platform. Has an authentication, backend APIs, ",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "",
      description: "",
      image: "https://via.placeholder.com/150",
      link: "https://www.project2.com" 
    },
    {
      id: 5,
      title: "Roflex",
      description: "Developed 5 new React components for Roflex's frontend.",
      image: roflex,
      img_link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg", 
      link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg"
    },
    {
      id: 6,
      title: "CampAbilities",
      description: "Designed UI/UX web interface",
      image: campAbilities,
      img_link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Nathaniel-Jamison-Tony-Li-Nicole-Ding-Christian-Jay-Concepcion-Nicole-Windram.jpg", 
      link: "https://www.campabilities.org/"
    },
  ];

  return (
    <section id="projects" className="bg-beige dark:bg-teal py-10 px-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-charcoal dark:text-white text-left mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition animate-fadeIn"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-charcoal-600 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <a href={project.img_link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg mb-2"
                />
              </a>
              <iframe
                src={project.video}
                title={project.title}
                className="w-full h-48 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProjectsGrid;
