/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Active l'export statique pour Hostinger
  trailingSlash: true, // Ajoute des slashes pour compatibilité serveur
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
}

export default nextConfig
