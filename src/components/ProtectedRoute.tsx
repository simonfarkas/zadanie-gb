"use client"
import { useEffect } from "react"
import { useAuth } from "@/store/AuthContext"
import { useRouter } from "next/navigation"
import { FullscreenLoader } from "./FullscreenLoader"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { user, loading } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!loading && !user) {
			router.push("/login")
		}
	}, [loading, user, router])

	if (loading || !user) {
		return (
			<div className="w-full flex-grow">
				<FullscreenLoader />
			</div>
		)
	}

	return <div>{children}</div>
}
