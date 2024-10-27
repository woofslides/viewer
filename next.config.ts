import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/howitworks",
        destination:
          "https://rmd.lewoof.xyz/?url=https://raw.githubusercontent.com/woofslides/.github/refs/heads/main/profile/README.md&html=true&nossr=true&noheader=true",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
