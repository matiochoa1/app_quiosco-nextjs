"use client";
import { motion } from "framer-motion";

export default function Heading({ children }: { children: React.ReactNode }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}>
				<h1 className="text-2xl my-5 bg-slate-900 text-white font-bold p-4 w-1/2 border-slate-800 shadow-lg text-center">
					{children}
				</h1>
			</motion.div>
		</>
	);
}
