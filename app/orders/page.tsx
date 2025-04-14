"use client";
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import Spinner from "@/components/ui/Spinner";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";

export default function OrdersPage() {
	const url = "/orders/api";
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
				<h1 className="text-center mt-20 text-6xl font-black">
					Ordenes Listas
				</h1>

				<Logo />

				{data.length ? (
					<div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
						{data.map((order) => (
							<LatestOrderItem order={order} key={order.id} />
						))}
					</div>
				) : (
					<p className="text-center">No hay ordenes listas</p>
				)}
			</>
		);
}
