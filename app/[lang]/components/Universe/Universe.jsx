'use client';

import Stars from './Stars';
import SolarSystem from './SolarSystem';

export default function Universe({ showStars = true, showSolarSystem = false }) {
  return (
    <div className="absolute inset-0">
      {/* Background Stars */}
      <div className="absolute inset-0 z-10">
        {showStars && <Stars />}
      </div>
      
      {/* Solar System */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {showSolarSystem && <SolarSystem />}
      </div>
    </div>
  );
} 