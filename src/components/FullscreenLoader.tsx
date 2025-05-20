"use client"

export const FullscreenLoader = () => {
	return (
		<div className="w-full h-full flex items-center justify-center py-20">
			<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-900" />
		</div>
	)
}
