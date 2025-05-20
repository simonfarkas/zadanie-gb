import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { FC } from 'react';
import Link from 'next/link';

interface ProductCardProps {
	product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => (
	<Link key={product.id} href={`/product/${product.id}`}>
		<div
			className="group relative flex flex-col p-4 h-full w-full"
		>
			<div className="relative w-full aspect-[1/1] rounded-md overflow-hidden">
				<Image
					src={product.image}
					alt={product.title}
					fill
					sizes="(max-width: 768px) 100vw, 33vw"
					className="object-contain"
					priority
				/>
				<div className="absolute left-3 bottom-3 bg-black opacity-50 duration-200 hover:opacity-100 hover:bg-primary cursor-pointer p-2">
					<ShoppingCart className="text-white" size={24} />
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
