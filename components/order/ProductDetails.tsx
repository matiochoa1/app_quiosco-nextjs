import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

type ProductDetailsProps = {
	item: OrderItem;
};

const MAX_ITEMS = 10;
const MIN_ITEMS = 1;

export default function ProductDetails({ item }: ProductDetailsProps) {
	const increaseQuantity = useStore((state) => state.increaseQuantity);
	const decreaseQuantity = useStore((state) => state.decreaseQuantity);
	const removeFromOrder = useStore((state) => state.removeFromOrder);

	const disableDecreaseButton = useMemo(
		() => item.quantity === MIN_ITEMS,
		[item]
	);
	const disableIncreaseButton = useMemo(
		() => item.quantity >= MAX_ITEMS,
		[item]
	);

	return (
		<>
			<div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
				<div className="space-y-4">
					<div className="flex justify-between items-start">
						<p className="text-xl font-bold">{item.name} </p>

						<button
							type="button"
							onClick={() => removeFromOrder(item.id)}
							className="cursor-pointer">
							<XCircleIcon className="text-red-600 h-8 w-8 hover:text-red-500" />
						</button>
					</div>
					<p className="text-2xl text-amber-500 font-black">
						{formatCurrency(item.price)}
					</p>
					<div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
						<button
							type="button"
							disabled={disableDecreaseButton}
							onClick={() => decreaseQuantity(item.id)}
							className="cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed">
							<MinusIcon className="h-6 w-6" />
						</button>

						<p className="text-lg font-black ">{item.quantity}</p>

						<button
							type="button"
							onClick={() => increaseQuantity(item.id)}
							disabled={disableIncreaseButton}
							className="cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed">
							<PlusIcon className="h-6 w-6" />
						</button>
					</div>
					<p className="text-xl font-black text-gray-700">
						Subtotal: {""}
						<span className="font-normal">{formatCurrency(item.subtotal)}</span>
					</p>
				</div>
			</div>
		</>
	);
}
