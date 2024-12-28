import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import ToggleMood from './ToggleMood';
import HomeButton from './HomeButton';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavigationBar() {
  const location = useLocation(); // Get current path
  const [selectedTab, setSelectedTab] = useState(null); // State to track selected tab

  // Routes configuration
  const [routes] = useState([
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'RESUME', path: '/resume' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ]);

  // Reset selected tab on page reload
  React.useEffect(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname);
    setSelectedTab(currentRoute ? currentRoute.name : null);
  }, [location.pathname, routes]);

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
        grid
        grid-cols-3
      "
    >
      {/* Home Button */}
      <div className="flex items-center space-x-6">
        <HomeButton />
      </div>

      {/* Tabs */}
      <Tab.Group>
        <Tab.List
          className="
            flex 
            justify-center sm:space-x-2 md:space-x-8 lg:space-x-12
          "
        >
          {routes.map((route) => (
            <Tab
              key={route.name}
              as={Link}
              to={route.path}
              onClick={() => setSelectedTab(route.name)} // Update selected tab on click
              className={({ selected }) =>
                classNames(
                  'px-2 py-1 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 text-xxs sm:text-xxs md:text-base lg:text-lg font-medium rounded-md z-50',
                  'focus:outline-none',
                  selectedTab === route.name
                    ? 'bg-white text-charcoal shadow'
                    : 'text-white hover:bg-white',
                  'transition-transform duration-200 ease-in-out transform md:hover:scale-125 lg:hover:scale-125 hover:bg-white hover:text-charcoal'
                )
              }
            >
              {route.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      {/* Light/Dark Button */}
      <div className="flex items-center space-x-6">
        <ToggleMood />
      </div>
    </div>
  );
}
