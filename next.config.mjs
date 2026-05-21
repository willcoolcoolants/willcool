/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/willcool',
  // Optional: Add assetPrefix if assets still don't load
  assetPrefix: '/willcool/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
