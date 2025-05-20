import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://gymbeam.sk/**'), new URL('https://fakestoreapi.com/**')],
	},
};

export default nextConfig;
