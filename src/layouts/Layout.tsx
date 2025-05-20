'use client'

import { Header } from "@/components/Header"
import { AuthProvider } from "@/store/AuthContext"

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<Header />
			{children}
		</AuthProvider>
	)
}
