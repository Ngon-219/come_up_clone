/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: true },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
