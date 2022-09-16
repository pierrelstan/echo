/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
    domains: [
      "imgur.com",
      "source.unsplash.com"
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
