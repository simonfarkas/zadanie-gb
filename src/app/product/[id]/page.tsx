import { ProductDetail } from "@/components/Product";
import { ProtectedRoute } from "@/components/shared";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ id: number }>;
};

export default async function Product({ params }: Props) {
	const { id } = await params;

	try {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
			next: { revalidate: 3600 },
		});

		if (!res.ok) {
			return notFound();
		}

		const product = await res.json();

		return (
			<ProtectedRoute>
				<ProductDetail product={product} />
			</ProtectedRoute>
		);
	} catch {
		notFound();
	}
}

