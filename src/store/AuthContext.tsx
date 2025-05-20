'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type User = {
	username: string;
};

type AuthContextType = {
	user: User | null;
	login: (username: string, password: string) => Promise<void>
	logout: () => void;
	loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);


	const login = async (username: string, password: string): Promise<void> => {
		const data = await fetch('https://fakestoreapi.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		}).then(response => response.json())

		if (data?.token) {
			setUser({ username });
			localStorage.setItem('user', JSON.stringify({ username }));
		}

		return data.token;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
		router.push('/');
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error()
	}
	return context;
}
