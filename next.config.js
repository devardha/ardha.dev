module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['ardha-dev.s3.ap-southeast-1.amazonaws.com', 'avatars.githubusercontent.com'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Powered-By',
                        value: 'Strapi',
                    },
                ]
            }
        ];
    },
}
