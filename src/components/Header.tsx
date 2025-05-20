'use client'
import { useState, useRef } from 'react'
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

	const handleLogout = () => {
		logout()
		setIsUserMenuOpen(false)
	}

	return (
		<header className="max-w-7xl w-full mx-auto px-4 py-4 md:py-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div className="flex justify-between items-center">
					<div className="w-32 md:w-auto">
						<Link href='/'>
							<Image
								src="https://gymbeam.sk/media/logo/stores/1/GB_Logo_Energy_SK.png"
								alt="gymbeam logo"
								width={175}
								height={50}
								className="h-auto w-full"
								loading='lazy'
							/>
						</Link>
					</div>
					<div className="flex md:hidden items-center gap-4">
						<button onClick={() => setIsSearchVisible(!isSearchVisible)}>
							<Search size={24} />
						</button>
						<div
							className="relative"
							onMouseEnter={() => setIsUserMenuOpen(true)}
							onMouseLeave={() => setIsUserMenuOpen(false)}
						>
							<User size={24} className="cursor-pointer" aria-label='Užívateľ' />
							{isUserMenuOpen && (
								<UserMenu
									onLogout={handleLogout}
									user={user}
									menuRef={userMenuRef as React.RefObject<HTMLDivElement>}
								/>
							)}
						</div>
						<ShoppingCart size={24} aria-label='Nákupný košík' />
					</div>
				</div>
				<div className={`w-full md:w-1/2 lg:w-1/3 ${isSearchVisible ? 'block' : 'hidden'} md:block`}>
					<div className="relative">
						<form className='flex flex-row'>
							<input className="h-7 w-full border-2 border-black px-2 text-sm outline-none disabled:border-secondary" placeholder="Hľadajte v obchode..." />
							<button className="z-20 flex w-7 h-7 items-center justify-center bg-black text-white">
								<Search size={20} />
							</button>
						</form>
						<button className="absolute right-3 top-1/2 transform -translate-y-1/2 md:hidden">
							<Search size={20} />
						</button>
					</div>
				</div>
				<div className="hidden md:flex items-center gap-6">
					<div
						className="relative"
						onMouseEnter={() => setIsUserMenuOpen(true)}
						onMouseLeave={() => setIsUserMenuOpen(false)}
					>
						<User size={24} className="cursor-pointer" />
						<div className="absolute w-full h-8 -bottom-8 z-10"></div>
						{isUserMenuOpen && (
							<UserMenu
								onLogout={handleLogout}
								user={user}
								menuRef={userMenuRef as React.RefObject<HTMLDivElement>}
							/>
						)}
					</div>
					<ShoppingCart size={24} />
				</div>
			</div>
		</header>
	)
}
