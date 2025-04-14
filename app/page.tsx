import Logo from "@/components/ui/Logo";
import {
	CheckIcon,
	HomeIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="h-screen flex items-center justify-center flex-col">
				<Logo />

				<div className="max-w-2xl mx-auto flex justify-around mt-20 flex-col lg:flex-row gap-10">
					<Link
						href={"/order/cafe"}
						className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-amber-300 transition-colors rounded-md"
						target="_blank">
						Ir al Quiosco
						<ShoppingCartIcon />
					</Link>

					<Link
						href={"/admin/products"}
						className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-amber-300 transition-colors rounded-md"
						target="_blank">
						Ir a Admin
						<HomeIcon />
					</Link>

					<Link
						href={"/orders"}
						className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-amber-300 transition-colors rounded-md"
						target="_blank">
						Ir a Ordenes
						<CheckIcon />
					</Link>
				</div>
			</div>
		</>
	);
}
