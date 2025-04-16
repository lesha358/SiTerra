/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['siterra-studio.ru', 'www.siterra-studio.ru'],
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
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  }
}

export default nextConfig 