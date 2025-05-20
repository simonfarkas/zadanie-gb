'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const users = [{
	email: 'zakaznik@email.com',
	password: 'password123'
}];

type User = {
	email: string;
};

type AuthContextType = {
	user: User | null;
	login: (email: string, password: string) => boolean | { error: string };
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

	const findUser = (user: User & { password: string }) => {
		return users.find(u => u.email === user.email && u.password === user.password);
	};

	const login = (email: string, password: string): boolean | { error: string } => {
		const foundUser = findUser({ email, password });
		if (foundUser) {
			setUser({ email: foundUser.email });
			localStorage.setItem('user', JSON.stringify({ email: foundUser.email }));
			return true;
		}
		return { error: 'Nesprávne prihlasovacie údaje.' };
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
