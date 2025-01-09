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
    },
    webpack: (config, { isServer }) => {
      // Tắt các cảnh báo về managed items
      config.infrastructureLogging = {
        level: 'error',
      };

      // Tắt các cảnh báo về các module không tồn tại
      config.ignoreWarnings = [
        { module: /sharp/ },
        { module: /@next\/swc/ },
      ];

      return config;
    },
  }
  
  module.exports = nextConfig