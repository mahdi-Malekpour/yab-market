/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // برای ساخت static
  images: { unoptimized: true }, // حذف Image Optimization
  basePath: '/yab-market',    // اسم ریپو روی GitHub
  assetPrefix: '/yab-market/', // مسیر asset ها
};

module.exports = nextConfig;
