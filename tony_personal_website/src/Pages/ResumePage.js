import React from 'react';
import pdfFile from "./../assets/TonysResume2025.pdf"; // Import PDF file

const ResumePage = () => {
  return (
    <div className="p-6 w-full h-screen"> {/* Make the container fill the screen */}
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>

      <object
        data={pdfFile}
        type="application/pdf"
        width="100%" // Set full width
        height="90%" // Adjust height to leave space for heading and download link
        className="border rounded-md shadow-lg"
      >
        <p>
          Alternative text - include a link 
          <a href={pdfFile}>to the PDF!</a>
        </p>
      </object>

      {/* Download Link */}
      <a
        href={pdfFile}
        download="My_Resume.pdf"
        className="text-charcoal dark:text-beige text-3xl underline hover:text-yellow mt-4 block"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumePage;
