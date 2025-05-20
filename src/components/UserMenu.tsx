export const UserMenu = ({
	isVisible,
	onLogout,
	user,
	menuRef,
}: {
	isVisible: boolean
	onLogout: () => void
	user: { email: string } | null
	menuRef: React.RefObject<HTMLDivElement>
}) =>
(
	<div
		ref={menuRef}
		className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10 transition-opacity ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
			}`}
	>
		{user ? (
			<>
				<div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">{user.email}</div>
				<button
					onClick={onLogout}
					className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
				>
					Odhlásenie
				</button>
			</>
		) : (
			<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
				Prihlásiť sa
			</button>
		)}
	</div>
)

