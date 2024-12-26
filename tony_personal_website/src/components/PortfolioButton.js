import { useState } from 'react';

export default function PortfolioButton() {
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
            <h2 className="text-2xl font-bold mb-4">See my Portfolio</h2>
              <p className="text-charcoal">
                Replace this with link to portfolio
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
