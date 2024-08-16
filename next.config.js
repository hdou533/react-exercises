
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.dog.ceo",
                pathname: '/breeds/**',
            }
        ]
    }
}

module.exports = nextConfig
