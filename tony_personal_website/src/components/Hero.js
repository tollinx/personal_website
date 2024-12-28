import React from "react";
import AboutMeButton from "./AboutMeButton";
import profilePic from "./../assets/zoomedInFriendsgiving.jpg";

const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        bg-beige
        dark:bg-teal
        text-charcoal
        dark:text-white
        animate-slideFadeIn
        flex
        justify-center
        items-center
      "
    >
      {/* Container to constrain width and create grid layout */}
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          items-center
          px-4
          py-8
        "
      >
        {/* column: Profile image */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Tony Lin Friendsgiving"
            className="
              w-36  /* default width for small screens */
              h-auto
              sm:w-36 /* wider at ≥640px */
              md:w-72 /* even wider at ≥768px */
              lg:w-96 /* even wider at ≥1024px */
              rounded-lg
              object-cover
              object-center
              animate-fadeInRight
            "
          />
        </div>

        {/* column: Headings, text, buttons */}
        <div className="flex flex-col items-start">
          <h1 className="text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold">
            The Products and Works
          </h1>
          <h1 className="text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold mt-2">
            of Tony Lin
          </h1>
          <p className="mt-4 text-xs sm:text-base md:text-lg lg:text-xl max-w-prose">
            My mission is to design and develop solutions for your business needs.
          </p>


      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a
          href="https://www.linkedin.com/in/tony-lin1/"
          className="
            /* Base (for very small screens) */
            px-2
            py-2
            text-xxs

            /* At small screens (≥640px) and up */
            sm:px-4
            sm:py-3
            sm:text-base

            /* Medium */
            px-2
            py-2
            md:text-base

            /* Large */
            px-2
            py-2
            lg:text-base

            bg-green
            text-white
            rounded-lg
            hover:bg-yellow
            transition-all
            text-center
          "
        >
          DM me on LinkedIn
        </a>
        <a
          href="mailto:tonylin49ine@example.com"
          className="
            /* Base (for very small screens) */
            px-2
            py-2
            text-xxs

            /* At small screens (≥640px) and up */
            sm:px-4
            sm:py-3
            sm:text-base

            bg-green
            text-white
            rounded-lg
            hover:bg-yellow
            transition-all
            text-center
          "
        >
          Or send an email?
        </a>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
