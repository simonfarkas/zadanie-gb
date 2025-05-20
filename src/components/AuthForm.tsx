'use client'

import { useAuth } from "@/store/AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"

interface AuthFormProps {
	register?: boolean
}

export const AuthForm: FC<AuthFormProps> = ({ register }) => {
	const router = useRouter()
	const [error, setError] = useState<string | null>(null)
	const { login } = useAuth()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)

		const email = formData.get("email") as string
		const username = formData.get("username") as string
		const password = formData.get("password") as string
		const confirmPassword = formData.get("confirmPassword") as string

		if (register && (!email || !username || !password || !confirmPassword)) {
			setError("Vyplňte všetky polia.")
			return
		}
		if (!register && (!username || !password)) {
			setError("Vyplňte všetky polia.")
			return
		}
		if (register && password !== confirmPassword) {
			setError("Heslá sa nezhodujú.")
			return
		}

		const result = await login(username, password);

		if (result.success) {
			router.push('/');
		} else {
			setError(result.message);
		}
	}

	return (
		<div className="max-w-md w-full mx-auto p-6 bg-white">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">
				{register ? "Registrácia užívateľa" : "Prihlásenie užívateľa"}
			</h2>
			<form onSubmit={handleSubmit}>
				{register && (
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
						<input
							id="email"
							name="email"
							type="email"
							className="w-full border border-gray-300 p-2 h-10"
						/>
					</div>
				)}

				<div className="mb-4">
					<label htmlFor="username" className="block text-gray-700 mb-1">Používateľské meno</label>
					<input
						id="username"
						name="username"
						type="text"
						className="w-full border border-gray-300 p-2 h-10"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700 mb-1">Heslo</label>
					<input
						id="password"
						name="password"
						type="password"
						className="w-full border border-gray-300 p-2 h-10"
					/>
				</div>

				{register && (
					<div className="mb-6">
						<label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Potvrdiť heslo</label>
						<input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							className="w-full border border-gray-300 p-2 h-10"
						/>
					</div>
				)}

				<button
					type='submit'
					className="w-full text-white font-bold py-3 uppercase bg-primary cursor-pointer"
				>
					{register ? "Registrovať" : "Prihlásiť"}
				</button>

				<Link href={register ? "/login" : "/register"}>
					<p className="text-gray-600 text-center mx-auto mt-4 w-full">{register ? "Prihlásiť sa" : "Registrovať sa"}</p>
				</Link>

				{error && (
					<p className="text-center text-red-600 mt-4">{error}</p>
				)}
			</form>
		</div >
	)
}
