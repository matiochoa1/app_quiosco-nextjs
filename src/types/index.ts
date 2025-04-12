import { Order, OrderProducts, Product } from "@prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
	phone?: string;
	quantity: number;
	subtotal: number;
};

export type OrderWithProducts = Order & {
	orderProducts: (OrderProducts & {
		product: Product;
	})[];
};
