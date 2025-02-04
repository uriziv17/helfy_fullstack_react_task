import React from "react";
import { Product } from "../data-providers/Server";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="product-card">
			<h1>{product.title}</h1>
		</div>
	);
}
