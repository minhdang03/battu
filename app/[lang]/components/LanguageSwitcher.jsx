'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '../../config/i18n';
import { setCookie } from 'cookies-next';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];
  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');

  const handleLanguageChange = (locale) => {
    if (locale === currentLocale) {
      setIsOpen(false);
      return;
    }

    // Set cookie trước khi chuyển hướng
    setCookie('NEXT_LOCALE', locale, {
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    setIsOpen(false);
    
    // Chuyển hướng đến URL mới với locale mới
    const newPathname = `/${locale}${pathnameWithoutLocale ? `/${pathnameWithoutLocale}` : ''}`;
    router.push(newPathname, { scroll: false });
  };

  const getLanguageEmoji = (locale) => {
    return locale === 'vi' ? '🇻🇳' : '🇬🇧';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full 
          bg-gray-800/40 hover:bg-gray-700/50 transition-all duration-300
          border border-gray-700/50 hover:border-gray-600/50
          text-gray-300 hover:text-white"
      >
        <span className="text-sm">{getLanguageEmoji(currentLocale)}</span>
        <span className="text-xs font-medium">{currentLocale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 bg-gray-800/90 backdrop-blur-lg rounded-lg 
            shadow-lg border border-gray-700/50 overflow-hidden
            min-w-[90px] transform origin-top-right transition-all duration-200"
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full px-4 py-2 text-sm transition-all duration-200
                flex items-center gap-2
                ${currentLocale === locale
                  ? 'bg-purple-600/20 text-purple-300'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
            >
              <span>{getLanguageEmoji(locale)}</span>
              <span className="font-medium">{locale.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 