'use client';

import { Product } from "@/types";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { FC, useState } from "react";

interface ProductDetailProps {
	product: Product;
}

export const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="max-w-6xl mx-auto p-4">
			<div className="flex flex-col md:flex-row gap-10">
				<div className="flex flex-col gap-4 md:w-1/3">
					<div className="relative w-full aspect-square rounded-xl p-4 bg-white">
						<Image
							src={product.image}
							alt={product.title}
							fill
							className="object-contain"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-4 md:w-2/3">
					<h1 className="text-2xl font-bold ">{product.title}</h1>
					<p>{product.description}</p>
					<div className="flex items-center gap-2 text-sm">
						<span className="bg-black text-white px-3 py-1 font-bold">SKLADOM</span>
						<span className="bg-green-500 text-white px-3 py-1 font-bold">Môžete mať zajtra</span>
					</div>
					<div className="text-2xl font-bold text-red-600">{product.price.toFixed(2)} €</div>
					<div className="flex flex-col gap-4 md:w-1/2">
						<div className="flex items-center gap-2">
							<button
								onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
								className="cursor-pointer"
							>
								<Minus />
							</button>
							<input className="w-20 border-2 text-center border-black" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="mb-[2px] cursor-pointer"
							>
								<Plus />
							</button>
						</div>
						<button className="bg-primary text-white font-semibold px-6 py-2 hover:opacity-90 transition cursor-pointer">
							<span className="flex items-center justify-center">
								PRIDAŤ DO KOŠÍKA
								<ShoppingCart className='ml-2' />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
