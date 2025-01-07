'use client';

import { useState } from 'react';
import Link from 'next/link';
import { questionCategories } from '../../data/questions';

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Delay trước khi đóng dropdown
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="bg-white backdrop-blur-sm shadow-md">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center px-4 h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center space-x-1">
          <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              stroke="currentColor"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
          <span className="text-lg font-bold text-yellow-500">
            immortality.vn
          </span>
        </Link>

        {/* Questions Menu */}
        <div className="flex items-center ml-auto">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/questions"
              className="text-gray-700 hover:text-gray-900 transition-all duration-200
                px-4 py-2 rounded-md text-[13px] font-semibold tracking-wide
                hover:bg-gray-100 uppercase flex items-center"
            >
              {questionCategories.title}
              <svg 
                className={`w-4 h-4 ml-1 transform transition-transform duration-200
                  ${showDropdown ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div 
                className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50
                  transform transition-all duration-200 origin-top"
              >
                <div className="px-4 py-2 text-sm font-semibold text-gray-900 border-b">
                  {questionCategories.description}
                </div>
                {questionCategories.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/questions/${category.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                      transition-colors duration-150"
                  >
                    <div className="font-medium">{category.title}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="currentColor"
                className="animate-pulse"
              />
            </svg>
            <span className="text-lg font-bold text-yellow-500">
              immortality.vn
            </span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700
              hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg bg-white">
            {questionCategories.categories.map((category) => (
              <Link
                key={category.id}
                href={`/questions/${category.id}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                  hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
