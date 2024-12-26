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
      // image: ,
      link: "https://www.bme.cuhk.edu.hk/emedic/video/gp19.mp4"
    },
    {
      id: 3,
      title: "Roflex",
      description: "Helping physical therapists and recovering athletes.",
      image: roflex,
      img_link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg", 
      link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg"
    },
    {
      id: 4,
      title: "CampAbilities",
      description: "Helping visually impaired children participate in running activities with Bluetooth beacons",
      image: campAbilities,
      img_link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Nathaniel-Jamison-Tony-Li-Nicole-Ding-Christian-Jay-Concepcion-Nicole-Windram.jpg", 
      link: "https://www.campabilities.org/"
    },
    {
      id: 5,
      title: "Q&A Platform",
      description: "I built an end to end Q&A platform. Has an authentication, backend APIs, ",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section id="projects" className="bg-beige dark:bg-teal py-10 px-10">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-charcoal dark:text-white text-left mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 mb-6 shadow-lg rounded-lg hover:shadow-4xl transition transform hover:scale-105 animate-fadeIn"
          >
            <h3 className="text-4xl text-charcoal font-bold">{project.title}</h3>

            <p className="text-charcoal text-xl mb-4">{project.description}</p>
            
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
              className="w-full h-96 rounded-lg"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
            
            <a
              href={project.link}
              className="text-green text-xl hover:text-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              More details!
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProjectsGrid;
