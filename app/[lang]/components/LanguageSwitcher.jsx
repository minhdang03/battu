'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales } from '../../config/i18n';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');

  const getLanguageEmoji = (locale) => {
    return locale === 'vi' ? '🇻🇳' : '🇬🇧';
  };

  return (
    <div className="relative">
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 rounded-md 
          hover:bg-gray-100 transition-colors text-sm"
      >
        <span>{getLanguageEmoji(currentLocale)}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transform transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-1 bg-white rounded-md shadow-lg py-1 z-50
            min-w-[100px] border border-gray-100"
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}/${pathnameWithoutLocale}`}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm transition-colors
                ${currentLocale === locale
                  ? 'bg-gray-50 text-purple-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              <span className="flex items-center space-x-2">
                <span>{getLanguageEmoji(locale)}</span>
                <span>{locale.toUpperCase()}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 