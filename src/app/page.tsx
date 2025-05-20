import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Home() {
	return (
		<ProtectedRoute>
			<div className="flex flex-col items-center justify-center py-2">
				<div>home</div>
			</div>
		</ProtectedRoute>
	)
}
