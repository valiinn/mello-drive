import type { NextConfig } from "next";

const repoName = "mello-drive";
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.NEXT_PUBLIC_BASE_PATH === `/${repoName}`;

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
