import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const cspHeader = `
 script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-eval';
`;
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clicklovegrow.com",
      },
    ],
  },
};

module.exports = nextConfig;
