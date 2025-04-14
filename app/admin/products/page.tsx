import { redirect } from "next/navigation";
import ProductsPagination from "@/components/products/ProductsPagination";
import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import ProductSearchForm from "@/components/products/ProductSearchForm";

async function productCount() {
	return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
	const skip = (page - 1) * pageSize;
	const products = await prisma.product.findMany({
		take: pageSize,
		skip,
		include: {
			category: true,
		},
	});

	return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const { page } = await searchParams;
	const currentPage = +(page || 1);
	const pageSize = 10;

	if (currentPage < 0) redirect("/admin/products");

	const productsData = getProducts(currentPage, pageSize);
	const totalProductsData = productCount(); // this will return the exact number of products we have that will help us with the pagination

	const [products, totalProducts] = await Promise.all([
		productsData,
		totalProductsData,
	]);
	const totalPages = Math.ceil(totalProducts / pageSize);

	if (currentPage > totalPages) redirect("/admin/products");

	return (
		<>
			<Heading>Administrar Productos</Heading>

			<div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
				<Link
					href={"/admin/products/new"}
					className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 cursor-pointer text-center font-bold hover:bg-amber-500 transition-colors shadow-lg">
					Crear Producto
				</Link>

				<ProductSearchForm />
			</div>

			<ProductTable products={products} />

			<ProductsPagination page={currentPage} totalPages={totalPages} />
		</>
	);
}
