// import config from "./config/index.mjs";

const nextConfig = {
  sassOptions: {
    additionalData: `
      @import "@/styles/variables.module.scss";
      @import "@/styles/globals.module.scss";
    `,
  },
  async rewrites() {
    return [
      // POST /login -> config.api/login
      // { source: "/api/:path*", destination: `${config.api}/:path*` },
    ];
  },
};

export default nextConfig;
