/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Niche eti use korle shob domain allow hoye jabe
      },
      {
        protocol: 'http', // HTTP domain gulanor jonno eti add korte paren (optional)
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
