'use client'

import { useRouter } from "next/navigation"

export default function Error() {
	const { replace } = useRouter()
	return (
		<div className='flex flex-col items-center mt-20'>
			<h1 className='text-8xl'>Ups!</h1>
			<h2 className='text-3xl mt-10'>Niečo sa pokazilo</h2>
			<button
				onClick={
					() => replace('/')
				}
				className='bg-primary px-4 py-2 text-white mt-4 cursor-pointer'
			>
				Domov
			</button>
		</div>
	)
}
