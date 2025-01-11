/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'

            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/**'

            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**'

            },

        ]
    }
};

export default nextConfig;
