import React from "react";

const AboutPage = () => {
  return (
    <section
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        bg-beige
        dark:bg-teal
        text-charcoal
        dark:text-white
        px-4
        py-12
        md:px-8
        lg:px-16
        animate-fadeIn
      "
    >
      {/* About Me Header */}
      <div id="about-me" className="text-center mb-8 mt-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          About Me
        </h2>
      </div>

      {/* Timeline / Journey Section */}
      <div
        className="
          w-full
          max-w-3xl
          mx-auto
          space-y-6
          text-base
          md:text-lg
          lg:text-xl
          leading-relaxed
        "
      >
        <p>
          Hi there! I appreciate you making it here.
          This is a summary of my tech journey dating as far back as I can remember!
        </p>

        {/* 2025 */}
        <div>
          <span className="font-bold">2025:</span> <br />
          Happy New Years!
        </div>

        {/* 2024 */}
        <div>
          <span className="font-bold">2024:</span> <br />
          I earned a Computer Science Bachelor’s from Stony Brook in just over 2 years,
          traveled to South Korea and Japan, and started working at Deloitte. 
          I’ve been gaining experience in cloud, Gen AI, and backend development.
        </div>

        {/* 2023 */}
        <div>
          <span className="font-bold">2023:</span> <br />
          I overloaded on credits and learned more than ever—Data Structures, 
          Web Design, Linear Algebra, and more! I became a frontend lead for Cicaida, 
          onboarding 5 new developers and migrating the app to desktop. 
          I also had my first big-company internship as a Summer Scholar at Deloitte.
        </div>

        {/* 2022 */}
        <div>
          <span className="font-bold">2022:</span> <br />
          I officially began my coding journey, switching to Computer Science. 
          I did a lot of mobile development and React front-end with no prior coding experience, 
          even presenting to an international audience!
        </div>

        {/* 2021 */}
        <div>
          <span className="font-bold">2021:</span> <br />
          I helped with UI/UX design for wrist-wearable device projects. 
          Professor Chan led a team of undergraduates on a new project called Cicaida, 
          which competed in the EMedic Global Clinical Technology Competition in Hong Kong. 
          I spent 2 weeks learning enough HTML, CSS, JavaScript, and React to build a frontend!
        </div>

        {/* 2020 */}
        <div>
          <span className="font-bold">2020:</span> <br />
          I enrolled at Stony Brook University as a Biomedical Engineering major. 
          I conducted research with Professor Chan, working on CampAbilities and Roflex, 
          focusing on wireframes and user flows.
          <br />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
