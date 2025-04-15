/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['siterra-studio.ru'],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Добавляем явные настройки для статических файлов
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/public/favicon.ico',
      },
    ];
  },
};

export default nextConfig; 