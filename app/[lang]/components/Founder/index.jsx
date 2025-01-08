'use client';

import { useState } from 'react';
import Image from 'next/image';

const founders = [
  {
    name: "Lữ Minh Đăng",
    image: "/images/founder/luminhdang.jpg",
    birthDate: "08/March/1995",
    location: "Sydney, Australia",
    joinDate: "01/01/2014",
    expertise: ["Tâm lý học", "Vật lý lượng tử", "Coder", "Photographer"]
  },
  {
    name: "Huỳnh Phú Sang",
    image: "/images/founder/huynhphusang.jpg",
    birthDate: "01/01/1963",
    location: "TP.HCM, Việt Nam",
    joinDate: "01/01/2014",
    expertise: ["Tâm lý học", "Vật lý lượng tử", "Coder", "Photographer"]
  }
];

const defaultProps = {
  title: "Đội Ngũ Sáng Lập",
  description: "Những người tiên phong trong hành trình khám phá bí mật của sự bất tử",
  bio: "Người bất tử",
  birthDateLabel: "Ngày sinh",
  locationLabel: "Địa điểm",
  expertiseLabel: "Chuyên môn",
  roles: {
    ceo: "Đồng sáng lập & CEO",
    cto: "Đồng sáng lập & CTO"
  }
};

const Founder = ({ 
  title = defaultProps.title,
  description = defaultProps.description,
  bio = defaultProps.bio,
  birthDateLabel = defaultProps.birthDateLabel,
  locationLabel = defaultProps.locationLabel,
  expertiseLabel = defaultProps.expertiseLabel,
  roles = defaultProps.roles
}) => {
  const [activeFounder, setActiveFounder] = useState(0);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-500
                ${activeFounder === index ? 'scale-105' : 'hover:scale-102'}`}
              onClick={() => setActiveFounder(index)}
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
                    priority={index === 0}
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg'
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-purple-400">
                      {index === 0 ? roles.ceo : roles.cto}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Bio */}
                  <p className="text-gray-300">{bio}</p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{birthDateLabel}</p>
                      <p className="text-gray-300">{founder.birthDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{locationLabel}</p>
                      <p className="text-gray-300">{founder.location}</p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-500 mb-3">{expertiseLabel}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder; 