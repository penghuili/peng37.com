const semi = require("@douyinfe/semi-next").default({});

require("dotenv").config();

const nextConfig = semi({
  trailingSlash: true,
  reactStrictMode: true,
  output: "export",
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-foundation",
    "@douyinfe/semi-icons",
  ],
  assetPrefix:
    process.env.NODE_ENV === "production" ? `/${process.env.TIMESTAMP}/` : "",
});

module.exports = nextConfig;
