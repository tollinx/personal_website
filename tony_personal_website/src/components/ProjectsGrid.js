import React from "react";
import libp2p_overview_img from './../assets/Libp2p_diagram.png';
import pfas_sources from './../assets/pfas_sources.png';
import campAbilities from './../assets/campAbilities.jpg';
import CicaidaLogo from "./../assets/CicaidaLogo.png"
import CicaidaPages from "./../assets/CicaidaPages.jpg"
import CicaidaVitals from "./..//assets/CicaidaVitals.jpg"
import roflex from './../assets/roflex.jpg';
import QALoggedIn from './../assets/LoggedInUserPage.png';
import { useState } from "react";

const ProjectsGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "OrcaCoin",
      date: "February 2024 - May 2024",
      description: "Block Chain Project. Built out a p2p network for nodes to communicate and trade ledgers to each other. My partner and I created a CLI for 600+ nodes to connect from different computers and send transactions within their network.",
      skills: "Blockchain, Backend APIs, JavaScript, Collaboration (35 developers)",
      image: libp2p_overview_img,
      link: "https://github.com/tollinx/OrcaCoinJS",
      background: "bg-blue-100"
    },
    {
      id: 2,
      title: "Cicaida",
      date: "June 2021 - January 2023",
      description:`
        Wrist wearable device project. Building a way to make medical assistants' lives easier with a central monitoring system for checking on patient's vitals. I start speaking at 1:26!
      `,
      skills: "JavaScript, Wrist wearable devices, Flutter, Dart, iOS and Android Development",
      video: "https://www.bme.cuhk.edu.hk/emedic/video/gp19.mp4",
      additionalImages: [CicaidaLogo, CicaidaPages, CicaidaVitals],
      link: "https://www.bme.cuhk.edu.hk/emedic/video/gp19.mp4",
      background: "bg-[#90EE90]"
    },
    {
      id: 3,
      title: "Roflex",
      date: "June 2021 - January 2023",
      description: "Provided physical therapists a smart wearable capable of improving the effectiveness of remote therapy by measuring the angles and accelerations of curl exercises using a gyroscope and accelerometer.",
      skills: "React, JavaScript, Firebase, Real-time data tracking, Figma",
      image: roflex,
      img_link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg", 
      link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg",
      background: "bg-blue-200"
    },
    {
      id: 4,
      title: "CampAbilities",
      date: "June 2021 - January 2023",
      description: "Helping visually impaired children participate in running activities with Bluetooth beacons which will alert runners wearing our wrist device if they're on course.",
      skills: "UI/UX Knowledge and Figma",
      image: campAbilities,
      img_link: "https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Nathaniel-Jamison-Tony-Li-Nicole-Ding-Christian-Jay-Concepcion-Nicole-Windram.jpg", 
      link: "https://www.campabilities.org/",
      background: "bg-red-200"
    },
    {
      id: 5,
      title: "Q&A Platform",
      date: "February 2023 - May 2023",
      description: "I was determined to learn how to build my first end-to-end application, which is why the user interface is mostly functionality than aesthetics. This Q&A platform has a LOT of features. It supports multiple users, autentication, posting questions, answering questions, grouping questions by tags, searching up questions, and a profile page!",
      skills: "Redux, Web Development, React, Mongo DB, Express, Node",
      image: QALoggedIn,
      link: "https://github.com/tollinx/QA_Platform/",
      background: "bg-white"
    },
  ];

  return (
    <section id="projects" className="bg-beige dark:bg-teal py-10 px-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-charcoal dark:text-white text-center m-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.background} p-6 mb-6 shadow-lg rounded-lg hover:shadow-4xl transition transform hover:scale-105 animate-fadeIn`}
            >
              <h3 className="text-sm sm:text-4xl md:text-4xl lg:text-4xl text-charcoal font-bold">{project.title}</h3>
              <p className="text-charcoal text-xxs sm:text-xl md:text-xl lg:text-xl mb-4 italic">{project.date}</p>
              <p className="text-charcoal text-xxs sm:text-xl md:text-xl lg:text-xl mb-4">{project.description}</p>

              <h2 className="text-xxs sm:text-xl md:text-xl lg:text-xl font-bold text-charcoal text-left">
                Skills:
              </h2>
              <p className="text-charcoal text-xxs sm:text-xl md:text-xl lg:text-xl mb-4">{project.skills}</p>

               {/* Render a video if it exists, else render default image */}
              {project.video ? (
              <iframe
                src={project.video}
                title={project.title}
                className="w-full h-36 sm:h-48 md:h-96 lg:h-96 rounded-lg"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              ) : (
                <a href={project.img_link}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg mb-2"
                  />
                </a>)}

              

              <button
                onClick={() => openModal(project)}
                className="text-green text-xl hover:text-yellow mt-4"
              >
                More details!
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-screen overflow-y-auto">
            <button
              onClick={closeModal}
              className="text-red-500 font-bold text-4xl absolute top-10 right-10"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-lg mb-4">{selectedProject.description}</p>
            {selectedProject.additionalImages &&
              selectedProject.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Additional ${selectedProject.title}`}
                  className="w-full h-auto rounded-lg mb-4"
                />
              ))}
            <iframe
              src={selectedProject.video}
              title={selectedProject.title}
              className="w-full h-96 rounded-lg"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green text-xl hover:text-yellow mt-4 inline-block"
            >
              Visit project page
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
