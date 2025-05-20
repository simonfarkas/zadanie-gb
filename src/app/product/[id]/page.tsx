import { ProductDetail } from "@/components/ProductDetail";
import { ProtectedRoute } from "@/components/ProtectedRoute";

type Props = {
	params: { id: number };
};

export default async function Product({ params }: Props) {
	const { id } = params;

	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await res.json();

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<ProtectedRoute>
			<ProductDetail product={product} />
		</ProtectedRoute>
	);
}
