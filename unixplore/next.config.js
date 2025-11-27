/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/hack',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    trailingSlash: true,
}

module.exports = nextConfig
