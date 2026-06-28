// Local dev: no base path → site at http://localhost:3000/
// GitHub Pages: workflow sets PAGES_BASE_PATH=/moeel → site at .../moeel/
const basePath = process.env.PAGES_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig; // ← back to export default