import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  {
    id: 1,
    name: 'Apple Watch Series 10',
    description: 'From $399 or $33.25/mo. for 12 mo.',
    image: '/path-to-your-image-1.png', // Replace with image path
  },
  {
    id: 2,
    name: 'MacBook Pro',
    description: 'From $1599 or $133.25/mo. for 12 mo.',
    image: '/path-to-your-image-2.png', // Replace with image path
  },
  {
    id: 3,
    name: 'iPad Mini',
    description: 'From $499 or $41.58/mo. for 12 mo.',
    image: '/path-to-your-image-3.png', // Replace with image path
  },
  {
    id: 4,
    name: 'Apple Watch Series 10',
    description: 'From $399 or $33.25/mo. for 12 mo.',
    image: '/path-to-your-image-1.png', // Replace with image path
  },
  {
    id: 5,
    name: 'MacBook Pro',
    description: 'From $1599 or $133.25/mo. for 12 mo.',
    image: '/path-to-your-image-2.png', // Replace with image path
  },
  {
    id: 6,
    name: 'iPad Mini',
    description: 'From $499 or $41.58/mo. for 12 mo.',
    image: '/path-to-your-image-3.png', // Replace with image path
  },
]

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState(null)

  const openModal = (product) => {
    setModalProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalProduct(null)
  }

  return (
    <div className="w-full py-10 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          <span className="text-blue-500">The latest.</span> Let them unwrap wonders.
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="relative mx-auto max-w-6xl">
        {/* Product Cards with Horizontal Scroll */}
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-64 flex-shrink-0 cursor-pointer"
              onClick={() => openModal(product)}
            >
              <div className="flex flex-col items-center rounded-lg p-6 bg-gray-50 shadow-lg">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex flex-col items-start mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className="p-2 bg-gray-300 rounded-full shadow-lg"
            onClick={() =>
              setSelectedIndex((prevIndex) =>
                prevIndex === 0 ? products.length - 1 : prevIndex - 1
              )
            }
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className="p-2 bg-gray-300 rounded-full shadow-lg"
            onClick={() =>
              setSelectedIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            ›
          </button>
        </div>
      </div>

      {/* Modal (Popup) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg w-96 p-6"
            onClick={(e) => e.stopPropagation()}  // Prevents closing when clicking inside the modal
          >
            {/* Modal Content */}
            <img
              src={modalProduct.image}
              alt={modalProduct.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{modalProduct.name}</h3>
            <p className="text-gray-600 mt-2">{modalProduct.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 text-blue-500 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
