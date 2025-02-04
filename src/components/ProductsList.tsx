import React from "react";
import { Product } from "../data-providers/Server.ts";
import ProductCard from "./ProductCard";

interface ProductListProps {
	products: Product[];
}

const ProductsList = (props: ProductListProps) => {
	const { products } = props;

	return (
		<div className="products-list">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductsList;
