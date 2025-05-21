import { ProductsList } from "@/components/Product";
import { ProtectedRoute } from "@/components/shared";

export default async function Home() {

	try {
		const res = await fetch('https://fakestoreapi.com/products', {
			next: { revalidate: 3600 },
		});

		const products = await res.json();

		return (
			<ProtectedRoute>
				<div className="flex flex-col items-center justify-center py-2">
					{products.length > 0 ? (
						<ProductsList products={products} />
					) : (
						<p className="text-2xl">
							Nenašli sa žiadne produkty. Skús neskôr.
						</p>
					)}
				</div>
			</ProtectedRoute>
		);
	} catch {
		return <ProtectedRoute>
			<p className="text-lg text-center w-full mt-10">
				Nastala chyba pri načítaní produktov. Skús neskôr.
			</p>
		</ProtectedRoute>
	}
}
