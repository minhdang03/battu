'use client';
import { useState, useEffect } from "react";
import SolarSystem from './components/SolarSystem';
import Founder from './components/Founder';
export default function Home() {

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative bg-transparent">
      {/* Stars Background */}

      <div className="w-full max-w-4xl p-8 relative z-10">
        {/* Logo và Heading */}
        <div className="text-center mb-16 space-y-6">
          <SolarSystem />
          
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg text-center leading-loose py-4 hover:scale-105 transition-transform duration-300">
            immortality
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center shadow-md hover:text-gray-100 transition-colors duration-300">
          Xây dựng một thế giới nơi tình yêu thương là trung tâm, không phân biệt tôn giáo, sắc tộc hoặc ngôn ngữ, tạo nên một tương lai không chiến tranh, nơi mọi người cùng nhau tạo nên một "Thiên Đàng Trên Trái Đất".
          </p>
        </div>
          
      </div>

      <Founder />
      
    </div>
  );
}