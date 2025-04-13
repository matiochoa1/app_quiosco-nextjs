import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

// Composition pattern to make usage of server components in client components
export default function CreateProductPage() {
	return (
		<>
			<Heading>Nuevo Producto</Heading>

			<AddProductForm>
				<ProductForm />
			</AddProductForm>
		</>
	);
}
