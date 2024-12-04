'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-3 md:px-4 lg:px-8">
        <div className="flex justify-between h-12 sm:h-14 md:h-16">
          {/* Menu lý thuyết (trái) */}
          <div className="flex items-center">
            <Link 
              href="/ly-thuyet"
              className="px-1 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 
                rounded-md text-[10px] xs:text-[11px] sm:text-sm md:text-base 
                font-medium text-white hover:bg-white/10 transition-colors"
            >
              Lý thuyết
            </Link>
          </div>

          {/* Logo (giữa) */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="text-[10px] xs:text-[11px] sm:text-base md:text-lg lg:text-xl 
                font-bold text-white whitespace-nowrap text-center px-0.5 sm:px-1"
            >
              CÔNG THỨC<br className="xs:hidden" /> SỐNG THỌ NGÀN NĂM
            </Link>
          </div>

          {/* Menu thực hành (phải) */}
          <div className="flex items-center">
            <Link 
              href="/thuc-hanh"
              className="px-1 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 
                rounded-md text-[10px] xs:text-[11px] sm:text-sm md:text-base 
                font-medium text-white hover:bg-white/10 transition-colors"
            >
              Thực hành
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}