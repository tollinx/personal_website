import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ToggleMood from './ToggleMood'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationBar() {
  // Instead of an object, you could also use an array of route objects
  const [routes] = useState([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ])

  return (
    <div
      className="
        fixed
        top-0 
        left-0 
        bg-green
        w-full 
        p-4 
        z-50
        text-charcoal
      "
    >
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-12">
          {routes.map((route) => (
            <Tab
              key={route.name}
              as={Link}      // IMPORTANT: Make Tab render as a Link
              to={route.path} // Pass the path as the 'to' prop
              className={({ selected }) =>
                classNames(
                  'px-4 py-2 sm:text-xxs md:text-base lg:text-xl font-medium rounded-md z-50',
                  'focus:outline-none',
                  selected
                    ? 'bg-white text-charcoal shadow'
                    : 'text-white hover:bg-white',
                  'transition-transform duration-200 ease-in-out transform hover:scale-120'
                )
              }
            >
              {route.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      {/* Mood Toggle or any extra items on the right */}
      <div className="flex items-center space-x-6">
        <ToggleMood />
      </div>
    </div>
  )
}
