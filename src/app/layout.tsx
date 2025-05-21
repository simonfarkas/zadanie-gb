import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/layouts/Layout";

export const metadata: Metadata = {
	title: "Case Study GymBeam",
	description: "Case Study GymBeam",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
