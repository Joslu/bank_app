/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  
}

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true,
        },
      ];
    },
  };
  