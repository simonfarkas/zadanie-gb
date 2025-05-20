'use client'

import { useAuth } from "@/store/AuthContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const AuthForm = () => {
	const router = useRouter()
	const [error, setError] = useState<string | null>(null)
	const { login } = useAuth()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const email = formData.get("email") as string
		const password = formData.get("password") as string

		if (!email || !password) {
			setError("Vyplňte všetky polia.")
			return
		}

		const res = login(email, password)

		if (typeof res !== 'boolean' && res.error) {
			setError(res.error)
		}
		else {
			setError(null)
			router.push("/")
		}
	}

	return (
		<div className="max-w-md w-full mx-auto p-6 bg-white">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">Prihlásenie užívateľa</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						className="w-full border border-gray-300 p-2 h-10"
					/>
				</div>

				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-700 mb-1">Heslo</label>
					<input
						id="password"
						name="password"
						type="password"
						className="w-full border border-gray-300 p-2 h-10"
					/>
				</div>

				<button
					type='submit'
					className="w-full text-white font-bold py-3 uppercase bg-primary cursor-pointer"
				>
					Prihlásiť
				</button>
				<p className="text-center text-red-600 mt-4">
					{error}
				</p>
			</form>
		</div>
	)
}
