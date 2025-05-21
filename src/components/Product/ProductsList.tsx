'use client'

import { FC, useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
	products: Product[];
}

export const ProductsList: FC<ProductListProps> = ({ products }) => {
	const [lastIndex, setLastIndex] = useState(4);

	const loadMore = () => {
		setLastIndex(prev => prev + 4);
		setTimeout(() => {
			window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

		}, 100);
	}

	const productsSlice = products.slice(0, lastIndex);

	return (
		<>
			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{productsSlice.map((product, i) => (
					<ProductCard product={product} key={product.id} priority={i <= lastIndex} />
				))}
			</div>
			{lastIndex < products.length ? (
				<div className='flex flex-row w-full items-center mx-auto justify-center mt-10'>
					<button type="button" onClick={loadMore} className="bg-primary text-white px-4 py-2 cursor-pointer">
						Načítať viac
					</button>
				</div>
			) : null}
		</>
	);
};
