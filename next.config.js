/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
