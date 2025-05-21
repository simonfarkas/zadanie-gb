'use client'

import { Header, Footer } from "@/components/Layout"
import { AuthProvider } from "@/store/AuthContext"


export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="w-full max-w-7xl mx-auto flex-grow py-6">{children}</main>
				<Footer />
			</div>
		</AuthProvider>
	);
};

