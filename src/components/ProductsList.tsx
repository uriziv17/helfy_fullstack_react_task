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
					/>
				))
			)}
		</div>
	);
};

export default ProductsList;
