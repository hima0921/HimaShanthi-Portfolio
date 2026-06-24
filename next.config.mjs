/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/HimaShanthi-Portfolio",
  assetPrefix: "/HimaShanthi-Portfolio/",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
