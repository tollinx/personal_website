import React from "react";
import AboutMeButton from "./AboutMeButton";

const Hero = () => {
  return (
    <section className="
      min-h-screen 
      bg-beige
      dark:bg-teal
      text-charcoal 
      dark:text-white 
      flex flex-col justify-center items-center
      animate-slideFadeIn
      ">
        
      <h1 className="sm:text-xs md:text-2xl lg:text-4xl font-bold text-center">
        The Products and Works
      </h1>
      <h1 className="sm:text-xs md:text-2xl lg:text-4xl font-bold text-center">
        of Tony Lin
      </h1>
      <p className="mt-4 sm:text-xs m:text-l lg:text-xl text-center sm:max-w-lg md:max-w-2xl max-w-2xl">
        My mission is to design and develop solutions for your business needs.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 space-x-4 sm:space-y-0 sm:space-x-4">
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
          DM me on LinkedIn
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
          Or send an email?
        </a>
      </div>
      <AboutMeButton />
    </section>
  );
};
  
  export default Hero;
  