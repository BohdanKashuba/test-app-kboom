/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.ts',
    },
    autoprefixer: {},
  },
};

module.exports = nextConfig;
