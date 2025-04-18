import { OrderWithProducts } from "@/src/types";

type LatestOrderItemProps = {
	order: OrderWithProducts;
};

export default function LatestOrderItem({ order }: LatestOrderItemProps) {
	return (
		<>
			<div className="bg-white shadow p-5 space-y-5 rounded-lg">
				<p className="text-2xl font-bold text-slate-600">
					Cliente: {order.name}
				</p>
				<p className="text-lg font-bold text-slate-600">Tel: {order.phone}</p>

				<ul
					role="list"
					className="divide-y divide-gray-200 border-t border-gray-200 text-sm fond-medium text-gray-500">
					{order.orderProducts.map((product) => (
						<li key={product.id} className="flex py-6 text-lg gap-2">
							<span className="font-bold">({product.quantity}) </span>{" "}
							<p>{product.product.name}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
