'use client'

import Link from "next/link"
import { FC } from "react"


interface UserMenuProps {
	onLogoutAction: () => void
	user: { username: string } | null
	menuRef: React.RefObject<HTMLDivElement>
}

export const UserMenu: FC<UserMenuProps> = ({ onLogoutAction, user, menuRef }) => (
	<div
		ref={menuRef}
		className="absolute right-0 mt-2 w-24 bg-white border-2 border-black z-10"
	>
		{user ? (
			<>
				<div className="pl-2 pr-4 py-2 text-sm hover:bg-gray-300">{user.username}</div>
				<button
					onClick={onLogoutAction}
					className="block w-full text-left pl-2 pr-4 py-2 text-sm cursor-pointer hover:bg-gray-300"
				>
					Odhlásenie
				</button>
			</>
		) : (
			<>
				<Link href="/login" className="block w-full text-left pl-2 pr-4 py-2 text-sm hover:bg-gray-300">
					Prihlásiť
				</Link>
				<Link href="/register" className="block w-full text-left pl-2 pr-4 py-2 text-sm hover:bg-gray-300">
					Registrácia
				</Link>
			</>
		)}
	</div>
)
