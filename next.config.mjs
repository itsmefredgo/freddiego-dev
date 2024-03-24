// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/(.*)",
      destination: "/en/$1",
    },
  ],
};

export default nextConfig;
