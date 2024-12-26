import { useState } from 'react';

export default function AboutMeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative m-12">
        <div className="flex items-center space-x-6">
        {/* About Me Button */}
        <button
            onClick={openModal}
            className="px-6 py-3 bg-green text-white font-semibold rounded-full hover:bg-yellow transition-all"
        >
            About Me
        </button>
        </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-green rounded-lg overflow-hidden shadow-lg w-96 p-6" 
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            {/* Modal Content - Change to Navigation to About Me Page*/}
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-charcoal">
                Hey! Thanks for making it here.
                <br />
                This is a summary of my tech journey dating as far back as I can remember!
                <br />
                <span className="font-bold">2025</span><br />
                  Happy New Years!
                <br /><span className="font-bold">2024</span><br />
                  I'd achieved a Computer Science Bachelor's from Stony Brook in a little over 2 years. 
                  Traveled South Korea and Japan!
                  Started working at Deloitte in July ever since and getting experience in cloud, Gen AI, and backend development.
                <br /><span className="font-bold">2023</span><br />
                  Overloaded on credits but I was learning more than I ever had in my life! 
                  Took classes on Data structures, web design, and linear algebra!
                  I became a frontend lead for Cicaida where I did my best to onboard 5 new developers and migrate the app to desktop.
                  I was a summer scholar at Deloitte, it was my first internship with a big company and I became interested in developing software for client solutions.
                <br /><span className="font-bold">2022</span><br />
                  I officially began my coding journey as I decided to begin the switch to Computer Science
                  I did a lot of mobile development and React frontend development with no coding background
                  Presented to an international 
                <br /><span className="font-bold">2021</span><br />
                  I was helping out a lot with UI/UX designs for wrist wearable device projects. 
                  Professor Chan and her team of undergraduate students embarked on a new project called Cicaida!
                  EMedic Global Clinical Technology Competition in Hong Kong
                  I was enjoying UI UX design, but I wanted to go deeper into my implementation!
                  I remember spending 2 weeks on a crash course to learn enough HTML, CSS, JavaScript, and React to develop a frontend
                <br /><span className="font-bold">2020</span><br />
                  Enrolled in Stony Brook University! Started out as a biomedical engineering major. 
                  I started out doing research with Professor Chan on an existing applications like CampAbilities and Roflex!
                  I got involved building wireframes and designing user flows. 
                  <br />
                  <a
                    href="https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Zeming-Kuang-Tony-Lin-Raymond-Xu-Nicole-Ding.jpg"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <a
                    href="https://bpb-us-e1.wpmucdn.com/you.stonybrook.edu/dist/c/4989/files/2021/04/BME_Nathaniel-Jamison-Tony-Li-Nicole-Ding-Christian-Jay-Concepcion-Nicole-Windram.jpg"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                <br />
              </p>


            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 text-charcoal font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
