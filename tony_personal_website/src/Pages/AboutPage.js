import React from "react";

const AboutPage = () => {
  return (
    <section className="w-full h-screen flex flex-col text-charcoal dark:text-white"> 
    <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
    </div>
    <div className="text-2xl w-half justify-left text-charcoal dark:text-white px-64">
        <p className="text-charcoal dark:text-white">
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
    </div>
    <div className="px-64 text-left">
    {/* Header */}
    <h1 className="text-4xl font-bold mb-8">Want to build something together?</h1>

    {/* Main Contact Section */}
    <div className="grid grid-cols-1 gap-12">
        {/* Email Section */}
        <div>
        <h2 className="text-2xl font-bold">Email</h2>
        <p className="text-lg">tonylin49ine@gmail.com</p>
        </div>

        {/* LinkedIn Section */}
        <div>
        <h2 className="text-2xl font-bold">LinkedIn</h2>
        <a
            href="https://www.linkedin.com/in/tony-lin1/"
            className="text-green-400 hover:text-green-500"
        >
            https://www.linkedin.com/in/tony-lin1/
        </a>
        </div>

        {/* GitHub Section */}
        <div>
        <h2 className="text-2xl font-bold">GitHub</h2>
        <a
            href="https://github.com/tollinx"
            className="text-green-400 hover:text-green-500"
        >
            https://github.com/tollinx
        </a>
        </div>
    </div>
    </div>

    </section>
  );
};

export default AboutPage;
