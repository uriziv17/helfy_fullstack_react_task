import { useState } from "react";
import { Product } from "../data-providers/Server.ts";
import ProductCard from "./ProductCard";

interface ProductListProps {
	products: Product[];
	isLoading: boolean;
	onStockUpdate: (product: Product) => void;
}

const ProductsList = ({
	products,
	isLoading,
	onStockUpdate,
}: ProductListProps) => {
	function getSaladIngredients(product: Product) {
		const ingredient_ids = product.ingredients.map((i) => i.product_id);
		return products.filter((p) => p.id in ingredient_ids);
	}

	return (
		<div className="products-list">
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onStockUpdate={() => onStockUpdate(product)}
						getSaladIngredients={() => getSaladIngredients(product)}
					/>
				))
			)}
		</div>
	);
};

export default ProductsList;
