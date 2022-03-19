/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["media.graphcms.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
