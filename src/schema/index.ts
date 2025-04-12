import { z } from "zod";

export const OrderSchema = z.object({
	name: z.string().min(1, "El nombre es obligatorio"),
	phone: z
		.string()
		.min(1, "El teléfono es obligatorio")
		.regex(/^\d+$/, "El teléfono debe ser un número válido"),
	total: z.number().min(1, "Hay errores en la orden"),
	order: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			price: z.number(),
			quantity: z.number(),
			subtotal: z.number(),
		})
	),
});
