/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env:{
        NEXTAUTH_SECRET:'secretboi',
        NEXTAUTH_URL:'http://localhost:3000',
    }
}

module.exports = nextConfig
