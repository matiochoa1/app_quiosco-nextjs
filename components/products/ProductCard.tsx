"use client";
import Image from "next/image";
import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import { motion } from "framer-motion";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 200, damping: 10 }}
				className="border border-amber-200 bg-white cursor-pointer shadow-md rounded-lg overflow-hidden">
				<Image
					src={`/products/${product.image}.jpg`}
					alt={`Imagen de ${product.name}`}
					width={500}
					height={500}
				/>

				<div className="p-5">
					<h3 className="text-md font-bold">{product.name}</h3>
					<p className="mt-5 font-black text-4xl text-amber-500">
						{formatCurrency(product.price)}
					</p>

					<AddProductButton product={product} />
				</div>
			</motion.div>
		</>
	);
}
