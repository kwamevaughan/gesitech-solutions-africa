/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/terms", destination: "/legal#terms", permanent: true },
      { source: "/privacy", destination: "/legal#privacy", permanent: true },
    ];
  },
};

export default nextConfig;
