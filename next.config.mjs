/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "n7pufribllhwvdam.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
