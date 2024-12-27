import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ToggleMood from './ToggleMood'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Scroll to section handler
const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export default function NavigationBar() {
  const [categories] = useState({
    Home: <Link to="/">Home</Link>,
    Portfolio: '/portfolio',
    About: '/about',
    Services: '/resume',
    Contact: '/contact',
  })

  return (
    <div className="
        fixed
        top-0 
        left-0 
        bg-green
        w-full 
        p-4 
        z-50
        text-charcoal
      ">
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-12">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              as="a"
              href={categories[category]} 
              className={({ selected }) =>
                classNames(
                  'px-4 py-2 text-m font-medium rounded-md z-1000',
                  'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800',
                  selected
                    ? 'bg-white text-charcoal shadow'
                    : 'text-white hover:bg-white/[0.2]',
                      'transition-transform duration-200 ease-in-out transform hover:scale-150'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <div className="flex items-center space-x-6">
        <ToggleMood/>
      </div>
    </div>
  )
}
