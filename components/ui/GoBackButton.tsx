"use client";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 cursor-pointer text-center font-bold hover:bg-amber-500 transition-colors shadow-lg">
			Volver
		</button>
	);
}
