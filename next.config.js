const semi = require('@douyinfe/semi-next').default({});
const path = require('path');

require('dotenv').config();

const nextConfig = semi({
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-foundation', '@douyinfe/semi-icons'],
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.TIMESTAMP}/` : '',
  webpack: config => {
    config.resolve.alias['@douyinfe/semi-ui'] = path.resolve(
      __dirname,
      'node_modules/@douyinfe/semi-ui/lib/es'
    );
    return config;
  },
});

module.exports = nextConfig;
