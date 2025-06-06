"use client";
import useSWR from "swr";
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";
import Spinner from "@/components/ui/Spinner";

export default function OrdersPage() {
	const url = "/admin/orders/api";
	const fetcher = () =>
		fetch(url)
			.then((res) => res.json())
			.then((data) => data);
	const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
		refreshInterval: 60000,
		revalidateOnFocus: false,
	});

	if (error) {
		<p className="text-red-600 text-center font-black">
			There was an error with the request, please try again...
		</p>;
	}

	if (isLoading) {
		<Spinner />;
	}

	if (data)
		return (
			<>
				<Heading>Administrar Ordenes...</Heading>

				{data.length ? (
					<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
						{data.map((order) => (
							<OrderCard key={order.id} order={order} />
						))}
					</div>
				) : (
					<p className="text-center text-gray-500">No hay ordenes pendientes</p>
				)}
			</>
		);
}
