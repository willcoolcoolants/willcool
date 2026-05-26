/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  // Optional: Add assetPrefix if assets still don't load
  //assetPrefix: '/willcool/',
  /*env: {
    NEXT_PUBLIC_BASE_PATH: '/willcool',
  },*/
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
