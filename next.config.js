/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // Tùy chọn
    images: {
      unoptimized: true,  // Nếu có sử dụng Image component
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    }
  }
  
  module.exports = nextConfig