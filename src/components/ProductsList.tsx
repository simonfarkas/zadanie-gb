import { FC } from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
	products: Product[];
}

export const ProductsList: FC<ProductListProps> = ({ products }) => (
	<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
		{products.map((product) => (
			<ProductCard product={product} key={product.id} />
		))}
	</div>
);
