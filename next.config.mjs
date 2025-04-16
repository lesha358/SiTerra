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
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/favicon.ico',
        permanent: true,
      },
    ]
  }
}

export default nextConfig 