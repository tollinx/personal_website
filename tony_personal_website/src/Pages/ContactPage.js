import React from "react";

const ContactPage = () => {
    return (      
      <div className="w-full h-full text-center mt-16 space-y-8 py-24 lg:py-44">
        <h1 className="sm:text-m md:text-3xl lg:text-4xl text-charcoal dark:text-beige font-bold mt-16">
          Want to build something together?
        </h1>

        <h1 className="sm:text-m md:text-3xl lg:text-4xl text-charcoal dark:text-beige font-bold mt-84">
          Or chat about Deloitte, coding, cocktails, or work opportunities?
        </h1>

        <h1 className="sm:text-m md:text-3xl lg:text-4xl text-charcoal dark:text-beige font-bold mt-84">
          You can reach me through these links:
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Email */}
          <div
            className="
              p-4
              rounded-lg
              transition
              transform
              hover:scale-105
              bg-green
            "
          >
            <h2 className="sm:text-m md:text-xl lg:text-2xl text-beige font-bold mb-1">
              Email
            </h2>
            <p className="text-base text-beige hover:text-yellow text-base md:text-lg lg:text-xl">
              tonylin49ine@gmail.com
            </p>
          </div>

          {/* LinkedIn */}
          <div
            className="
              p-4
              rounded-lg
              transition
              transform
              hover:scale-105
              bg-green
            "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl text-beige font-bold mb-1">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/tony-lin1/"
              className="text-beige hover:text-yellow text-base md:text-lg lg:text-xl underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tony-lin1
            </a>
          </div>

          {/* GitHub */}
          <div
            className="
              p-4
              rounded-lg
              transition
              transform
              hover:scale-105
              bg-green
            "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl text-beige font-bold">
              GitHub
            </h2>
            <a
              href="https://github.com/tollinx"
              className="text-beige hover:text-yellow text-base md:text-lg lg:text-xl underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/tollinx
            </a>
          </div>
        </div>
      </div>
    );};

export default ContactPage;