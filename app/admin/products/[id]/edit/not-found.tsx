import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-1/2 container mx-auto">
			<Heading>Producto No Encontrado</Heading>

			<div className="flex gap-10">
				<Link
					href="/admin/products"
					className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-amber-300 transition-colors">
					Ir a Productos
				</Link>

				<Link
					href="/admin/orders"
					className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-amber-300 transition-colors">
					Ir a Ordenes
				</Link>
			</div>
		</div>
	);
}
