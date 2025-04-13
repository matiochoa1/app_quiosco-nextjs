import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: searchTerm,
				mode: "insensitive", // thhis allows to search through the database without the need of searching the specific literall word
			},
		},
		include: {
			category: true,
		},
	});

	return products;
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { search: string };
}) {
	const products = await searchProducts(searchParams.search);

	return (
		<>
			<Heading>Resultados de Búsqueda: {searchParams.search}</Heading>

			<div className="flex flex-col gap-5 lg:flex-row lg:justify-end">
				<ProductSearchForm />
			</div>

			{products.length ? (
				<ProductTable products={products} />
			) : (
				<p className="text-center text-2xl mt-20 font-bold text-amber-400">
					No hay resultados...
				</p>
			)}
		</>
	);
}
