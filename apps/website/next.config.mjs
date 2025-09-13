/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**', // Use this to match all paths under the domain
            },
        ],
        domains: ['res.cloudinary.com', 'storage.googleapis.com'], // Added this to allow images from Cloudinary for events page (scraped from gdg site)
    },
};

export default nextConfig;
