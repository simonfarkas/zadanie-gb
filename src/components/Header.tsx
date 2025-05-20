'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ShoppingCart, User, Search } from 'lucide-react'
import { useAuth } from '@/store/AuthContext'
import { UserMenu } from './UserMenu'
import Link from 'next/link'

export const Header = () => {
	const { user, logout } = useAuth()
	const [isSearchVisible, setIsSearchVisible] = useState(false)
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
	const userMenuRef = useRef<HTMLDivElement>(null)

	const handleLogout = useCallback(() => {
		logout()
		setIsUserMenuOpen(false)
	}, [logout])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
				setIsUserMenuOpen(false)
			}
		}

		if (isUserMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isUserMenuOpen])

	return (
		<header className="max-w-7xl w-full mx-auto px-4 py-4 md:py-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div className="flex justify-between items-center">
					<div className="w-32 md:w-auto">
						<Link href='/'>
							<Image
								src="https://gymbeam.sk/media/logo/stores/1/GB_Logo_Energy_SK.png"
								alt="gymbeam logo"
								width={200}
								height={75}
								className="h-auto w-full"
								priority
							/>

						</Link>
					</div>
					<div className="flex md:hidden items-center gap-4">
						<button onClick={() => setIsSearchVisible(!isSearchVisible)}>
							<Search size={24} />
						</button>
						<ShoppingCart size={24} />
						<div className="relative">
							<User size={24} className="cursor-pointer" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} />
							<UserMenu
								isVisible={isUserMenuOpen}
								onLogout={handleLogout}
								user={user}
								menuRef={userMenuRef as React.RefObject<HTMLDivElement>}
							/>
						</div>
					</div>
				</div>

				<div className={`w-full md:w-1/2 lg:w-1/3 ${isSearchVisible ? 'block' : 'hidden'} md:block`}>
					<div className="relative">
						<input
							type="text"
							placeholder="Hľadajte v obchode"
							className="border border-gray-300 rounded-md px-4 py-2 w-full"
						/>
						<button className="absolute right-3 top-1/2 transform -translate-y-1/2 md:hidden">
							<Search size={20} />
						</button>
					</div>
				</div>

				<div className="hidden md:flex items-center gap-6">
					<ShoppingCart size={24} />
					<div className="relative">
						<User size={24} className="cursor-pointer" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} />
						<UserMenu
							isVisible={isUserMenuOpen}
							onLogout={handleLogout}
							user={user}
							menuRef={userMenuRef as React.RefObject<HTMLDivElement>}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}
