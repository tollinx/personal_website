import React from "react";
import AboutMeButton from "./AboutMeButton";

const Hero = () => {
  return (
    <section className="h-screen 
      bg-beige
      dark:bg-teal
      text-charcoal 
      dark:text-white 
      flex flex-col justify-center items-center">
        
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        A problem solver, engineer, and consultant.
      </h1>
      <h1 className="text-4xl md:text-6xl font-bold text-center m-8">
        Tony Lin
      </h1>
      <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
        My mission is to design and develop solutions for your business needs.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/in/tony-lin1/"
          className="
          px-4 
          py-2 
          bg-green
          text-white 
          rounded-lg 
          hover:bg-yellow
          transition-all"
        >
          Message me over LinkedIn
        </a>
        <a
          href="mailto:tonylin49ine@example.com"
          className="
            px-4 
            py-2 
            bg-green
            text-white 
            rounded-lg 
            hover:bg-yellow
            transition-all"
        >
          Send me an Email
        </a>
      </div>
      <AboutMeButton />
    </section>
  );
};
  
  export default Hero;
  