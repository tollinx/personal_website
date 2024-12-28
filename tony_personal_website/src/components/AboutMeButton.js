import { useRef } from 'react';

export default function AboutMeButton() {
  return (
        <div className="relative m-12">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => {
                const aboutMeSection = document.getElementById('about-me');
                aboutMeSection?.scrollIntoView({ behavior: 'smooth' });
              }}
                className="px-6 py-3 bg-green 
                            /* Medium */
                            px-2
                            py-2
                            md:text-base

                            /* Large */
                            px-2
                            py-2
                            lg:text-xl
                            text-white font-semibold rounded-full hover:bg-yellow transition-all"
              >
              About Me
            </button>
          </div>
        </div>
  );
}
