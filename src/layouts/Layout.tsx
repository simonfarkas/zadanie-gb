'use client'

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { AuthProvider } from "@/store/AuthContext"


export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow py-6">{children}</main>
				<Footer />
			</div>
		</AuthProvider>
	);
};

