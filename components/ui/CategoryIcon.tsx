"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@prisma/client";
import { motion } from "framer-motion";

type CategoryIconProps = {
	category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
	const params = useParams<{ category: string }>();

	return (
		<>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
				className={`${
					category.slug === params.category ? "bg-amber-400" : ""
				} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b cursor-pointer`}>
				<div className="w-16 h-16 relative">
					<Image
						src={`/icon_${category.slug}.svg`}
						alt="Icono de comida"
						fill
					/>
				</div>

				<Link href={`/order/${category.slug}`} className="font-bold text-xl">
					{category.name}
				</Link>
			</motion.div>
		</>
	);
}
