import React from "react";

const Footer = () => (
  <footer
    className={`
      bg-charcoal
      text-white
      text-center
      left-0
      bottom-0
      w-full
      py-2
      sm:py-3
      md:py-4
      lg:py-6
    `}
  >
    <p className="text-xs sm:text-sm md:text-base">
      © {new Date().getFullYear()} Tony Lin's Website. All rights reserved so be respectful plz.
    </p>
  </footer>
);

export default Footer;
