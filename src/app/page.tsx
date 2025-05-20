import { ProductsList } from "@/components/ProductsList";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default async function Home() {
	const res = await fetch('https://fakestoreapi.com/products');
	const products = await res.json();
	return (
		<ProtectedRoute>
			<div className="flex flex-col items-center justify-center py-2">
				<ProductsList products={products} />
			</div>
		</ProtectedRoute>
	);
}
