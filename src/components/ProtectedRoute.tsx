'use client';

import { useEffect } from 'react';
import { useAuth } from '@/store/AuthContext';
import { useRouter } from 'next/navigation';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.push('/login');
		}
	}, [loading, user, router]);

	if (loading || !user) {
		return <div className="flex items-center justify-center h-screen absolute bg-white w-full">
			<div className="loader" />
		</div>;
	}

	return (
		<div>
			{children}
		</div>
	);
}
