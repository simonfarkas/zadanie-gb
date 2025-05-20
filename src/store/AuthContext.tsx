'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from 'react';
import { useRouter } from 'next/navigation';

type User = {
	username: string;
};

type LoginResult =
	| { success: true; token: string }
	| { success: false; message: string };


type AuthContextType = {
	user: User | null;
	login: (username: string, password: string) => Promise<LoginResult>;
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


	const login = async (username: string, password: string): Promise<LoginResult> => {
		try {
			const response = await fetch('https://fakestoreapi.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password }),
			});

			const data = await response.json();

			if (response.ok && data?.token) {
				setUser({ username });
				localStorage.setItem('user', JSON.stringify({ username }));
				return { success: true, token: data.token };
			}

			if (response.status === 401) {
				return { success: false, message: 'Nesprávne prihlasovacie údaje.' };
			}

			return { success: false, message: 'Nastala chyba pri prihlásení. Skúste znova neskôr.' };

		} catch {
			return { success: false, message: 'Nastala chyba pri prihlásení. Skúste znova neskôr.' };
		}
	};
	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
		router.push('/');
	};


	const memoizedValue = useMemo(() => ({
		user,
		login,
		logout,
		loading,
	}), [user, loading]);

	return (
		<AuthContext.Provider value={memoizedValue}>
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
