import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Product() {
	return (
		<ProtectedRoute>
			<div>product</div>
		</ProtectedRoute>
	)
}
