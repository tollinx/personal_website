import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ToggleMood(){
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for saved preference and set initial mode
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle between dark and light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="fixed top-4 right-4 sm:top-4 sm:right-4 sm:p-3 md:top-4 md:right-4 md:p-2 rounded-full transition-all duration-300 hover:bg-white"
    >
      {isDarkMode ? (
        <FaMoon className="text-xl transition-all duration-300" />
      ) : (
        <FaSun className="text-xl transition-all duration-300" />
      )}
    </button>
  );
};
