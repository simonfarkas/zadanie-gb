import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://gymbeam.sk/**')],
	},
};

export default nextConfig;
