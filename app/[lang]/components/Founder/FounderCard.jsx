'use client';

import Image from 'next/image';

export default function FounderCard({ founder, isActive, onClick }) {
  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-500
        ${isActive ? 'scale-105' : 'hover:scale-102'}`}
      onClick={onClick}
    >
      {/* Card Container */}
      <div className="relative bg-gray-800 rounded-2xl overflow-hidden
        border border-gray-700 hover:border-purple-500/30 transition-all duration-500
        shadow-lg hover:shadow-purple-500/20">
        
        {/* Image Section */}
        <div className="relative h-64 sm:h-72">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
            <p className="text-purple-400">{founder.role}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Bio */}
          <p className="text-gray-300">{founder.bio}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Ngày sinh</p>
              <p className="text-gray-300">{founder.birthDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Địa điểm</p>
              <p className="text-gray-300">{founder.location}</p>
            </div>
          </div>

          {/* Expertise */}
          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-500 mb-3">Chuyên môn</p>
            <div className="flex flex-wrap gap-2">
              {founder.expertise.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300
                    rounded-full border border-purple-700/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 