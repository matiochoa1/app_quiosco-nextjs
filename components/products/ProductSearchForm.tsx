"use client";

import { SearchSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ProductSearchForm() {
	const router = useRouter();
	const handleSearchForm = (formData: FormData) => {
		const data = {
			search: formData.get("search"),
		};

		const result = SearchSchema.safeParse(data);

		if (!result.success) {
			result.error.issues.forEach((issue) => {
				toast.error(issue.message);
			});

			return;
		}

		router.push(`/admin/products/search?search=${result.data.search}`);
	};

	return (
		<>
			<form action={handleSearchForm} className="flex items-center">
				<input
					type="text"
					placeholder="Buscar producto"
					className="p-2 placeholder-gray-400 w-full bg-white shadow-lg text-sm font-bold focus:outline-indigo-600 transition-all"
					name="search"
				/>

				<input
					type="submit"
					value="Buscar"
					className="bg-indigo-600 p-2 uppercase text-white cursor-pointer hover:bg-indigo-700 transition-colors text-sm font-bold shadow-lg"
				/>
			</form>
		</>
	);
}
