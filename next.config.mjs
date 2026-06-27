// Deployed to a GitHub Pages project site at https://<user>.github.io/moeel/,
// so the app is served from the "/moeel" sub-path. Override with the
// PAGES_BASE_PATH env var if the repo is ever renamed or moved to a root site.
const basePath = process.env.PAGES_BASE_PATH ?? "/portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out on `npm run build`.
  output: "export",
  basePath,
  images: {
    // The next/image optimizer needs a server, which a static export has none of.
    // Serving images as-is also keeps the screenshots pixel-crisp.
    unoptimized: true,
  },
  // Expose the base path to the client so plain <a> links to files in /public
  // (the resume PDF) can be prefixed too. next/image and <Link> are handled
  // automatically by basePath.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
