/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  scssOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
