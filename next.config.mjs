/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['siterra-studio.ru', 'www.siterra-studio.ru'],
  },
  async headers() {
    return [
      {
        source: '/icon',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  }
}

export default nextConfig 