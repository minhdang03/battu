export default function SolarSystem() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto group z-20">
      {/* Các hành tinh */}
      <div className="absolute inset-0 z-10">
        {/* Sao Thủy */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-400/70
          animate-[mercury_1.2s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-gray-300 animate-pulse"></div>
        </div>
        
        {/* Sao Kim */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-yellow-600/70
          animate-[venus_3.1s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-yellow-500 animate-pulse"></div>
        </div>

        {/* Trái Đất */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-500/70
          animate-[earth_5s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-blue-400 animate-pulse"></div>
        </div>

        {/* Sao Hỏa */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-red-500/70
          animate-[mars_9.4s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-red-400 animate-pulse"></div>
        </div>

        {/* Sao Mộc */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-orange-300/70
          animate-[jupiter_60s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-orange-200 animate-pulse"></div>
        </div>

        {/* Sao Thổ */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-yellow-200/70
          animate-[saturn_147.5s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-yellow-100 animate-pulse"></div>
        </div>

        {/* Sao Thiên Vương */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-300/70
          animate-[uranus_420s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-blue-200 animate-pulse"></div>
        </div>

        {/* Sao Hải Vương */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-600/70
          animate-[neptune_825s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-blue-500 animate-pulse"></div>
        </div>
      </div>

      {/* Mặt trời */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full 
          relative overflow-hidden bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500
          animate-[spin_13.5s_linear_infinite]">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}