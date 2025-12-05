import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  trailingSlash: true,
  images: {
    remotePatterns: [new URL("https://wp.geshov.ru/wp-content/uploads/**")],
  },
};

export default nextConfig;
