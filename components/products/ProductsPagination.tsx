import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type ProductsPaginationProps = {
	page: number;
	totalPages: number;
};

export default function ProductsPagination({
	page,
	totalPages,
}: ProductsPaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<>
			<nav className="flex justify-center py-10 gap-0.5">
				{page > 1 && (
					<Link
						href={`/admin/products?page=${page - 1}`}
						className=" text-slate-700  hover:text-amber-400  bg-white p-2 border-slate-900 transition-colors flex items-center">
						<ArrowLeftIcon className="w-4 h-4" />
					</Link>
				)}

				{pages.map((currentPage) => (
					<Link
						href={`/admin/products?page=${currentPage}`}
						key={currentPage}
						className={`${
							page === currentPage
								? "font-black  text-amber-400"
								: " text-slate-700"
						} text-lg hover:text-amber-400  bg-white p-2 border-slate-900 transition-colors`}>
						{currentPage}
					</Link>
				))}

				{page < totalPages && (
					<Link
						href={`/admin/products?page=${page + 1}`}
						className=" text-slate-700  hover:text-amber-400 bg-white p-2 border-slate-900 transition-colors flex items-center">
						<ArrowRightIcon className="w-4 h-4" />
					</Link>
				)}
			</nav>
		</>
	);
}
