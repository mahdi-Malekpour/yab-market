/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // برای static export
  images: {
    unoptimized: true, // <--- این گزینه Image Optimization رو خاموش می‌کنه
  },
};

module.exports = nextConfig;
