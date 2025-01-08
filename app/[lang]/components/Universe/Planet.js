export default function Planet({ 
  orbitTime, 
  size, 
  color, 
  orbitDistance, 
  index 
}) {
  // Tính toán kích thước dựa trên breakpoint
  const planetSize = {
    base: Math.max(2, size - 2), // Kích thước nhỏ nhất là 2
    sm: size
  };

  return (
    <div 
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-${planetSize.base} h-${planetSize.base} 
        sm:w-${planetSize.sm} sm:h-${planetSize.sm} 
        rounded-full ${color} 
        animate-[orbit${index}_${orbitTime}s_linear_infinite]`}
      style={{ 
        transformOrigin: '50% 50%',
        transform: `rotate(0deg) translateX(${orbitDistance}px)`
      }}
    >
      <div className={`w-full h-full rounded-full ${color.replace('/70', '')} animate-pulse`}></div>
    </div>
  );
}