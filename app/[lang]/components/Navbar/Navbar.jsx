'use client';

import Link from 'next/link';
import { getTranslationsSync } from '../../../config/i18n';

export default function Navbar({ lang }) {
  const dict = getTranslationsSync(lang);

  return (
    <nav className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-3 md:px-4 lg:px-8">
        <div className="flex justify-between h-8 sm:h-10 md:h-12">
          {/* Menu lý thuyết (trái) */}
          <div className="flex items-center">
            <Link 
              href={`/${lang}/ly-thuyet`}
              className="px-1 sm:px-2 py-0.5 sm:py-1 
                rounded-md text-[9px] xs:text-[10px] sm:text-xs md:text-sm 
                font-medium text-white hover:bg-white/10 transition-colors"
            >
              {dict.navigation.theory}
            </Link>
          </div>

          {/* Logo (giữa) */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href={`/${lang}`}
              className="text-[9px] xs:text-[10px] sm:text-sm md:text-base
                font-bold text-white whitespace-nowrap text-center px-0.5 sm:px-1"
            >
              {dict.home.subtitle}
            </Link>
          </div>

          {/* Menu thực hành (phải) */}
          <div className="flex items-center">
            <Link 
              href={`/${lang}/thuc-hanh`}
              className="px-1 sm:px-2 py-0.5 sm:py-1
                rounded-md text-[9px] xs:text-[10px] sm:text-xs md:text-sm
                font-medium text-white hover:bg-white/10 transition-colors"
            >
              {dict.navigation.practice}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}