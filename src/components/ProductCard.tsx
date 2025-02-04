import React from "react";
import { Product } from "../data-providers/Server";

interface ProductCardProps {
	product: Product;
	onStockUpdate: (product: Product) => void;
}

export default function ProductCard({
	product,
	onStockUpdate,
}: ProductCardProps) {
	return (
		<div
			className={`product-card ${
				product.in_stock ? "in-stock" : "out-of-stock"
			}`}
		>
			<h2 className="product-title">{product.title}</h2>
			<button className="toggle-button" onClick={() => onStockUpdate(product)}>
				Toggle in stock
			</button>
		</div>
	);
}
