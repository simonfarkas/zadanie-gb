import { ProductDetail } from "@/components/ProductDetail";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ id: number }>;
};

export default async function Product({ params }: Props) {
	const { id } = await params;

	const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 3600 } });
	const product = await res.json();

	if (!product) {
		notFound();
	}

	return (
		<ProtectedRoute>
			<ProductDetail product={product} />
		</ProtectedRoute>
	);
}
