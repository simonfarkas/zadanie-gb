"use client"

import Image from "next/image"
import { ShoppingBasket } from "lucide-react"
import type { Product } from "@/types"
import type { FC } from "react"
import Link from "next/link"

interface ProductCardProps {
	product: Product
	priority?: boolean
}

export const ProductCard: FC<ProductCardProps> = ({ product, priority = false }) => (
	<Link key={product.id} href={`/product/${product.id}`}>
		<div className="group relative flex flex-col p-4 h-full w-full">
			<div className="relative w-full aspect-square rounded-md overflow-hidden">
				<Image
					src={product.image || "/placeholder.svg"}
					alt={product.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-contain"
					priority={priority}
					loading={priority ? undefined : "lazy"}
				/>
				<div
					onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
					}}
					className="absolute left-3 bottom-3 bg-black opacity-50 duration-200 hover:opacity-100 hover:bg-primary cursor-pointer p-2"
					aria-label="Add to cart"
				>
					<ShoppingBasket className="text-white" size={24} aria-label="Pridať do košíka" />
				</div>
			</div>

			<div className="flex flex-row items-center justify-between mt-6">
				<div className="flex-grow flex flex-col justify-between">
					<p className="text-sm text-black font-bold line-clamp-1">{product.title}</p>
					<p className="text-lg font-semibold mt-2 text-primary">{product.price} €</p>
				</div>
			</div>
		</div>
	</Link>
)
