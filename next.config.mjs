/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static export
    distDir: 'build', // Optional: where .next is generated
    trailingSlash: true, // Optional: useful for static hosts
  };
  
  export default nextConfig;
  