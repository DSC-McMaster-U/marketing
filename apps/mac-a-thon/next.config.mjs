/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.sanity.io',
        ]
    },
    redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mac-a-thon.gdscmcmasteru.ca',
          },
        ],
        destination: 'https://mac-a-thon.gdgmcmasteru.ca/:path*',
        permanent: true,
      },
    ];
  },
};

    


export default nextConfig;
