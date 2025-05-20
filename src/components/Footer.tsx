'use client'

export const Footer = () => (
	<footer className='bg-black w-full h-32'>
		<div className='max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
			<p className='text-white text-sm'>© {new Date().getFullYear()} GymBeam. All rights reserved.</p>
		</div>
	</footer>
)
