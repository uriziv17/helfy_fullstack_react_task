import { Product } from "./data-providers/Server";

export const shouldupdateStock = (product: Product, id: number) => {
	return (
		product.id === id || product.ingredients.some((i) => i.product_id === id)
	);
};
