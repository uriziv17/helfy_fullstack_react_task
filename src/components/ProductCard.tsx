import React from "react";
import { Product } from "../data-providers/Server";
import { IoExtensionPuzzle } from "react-icons/io5";
import SaladInfo from "./SaladInfo";

interface ProductCardProps {
	product: Product;
	onStockUpdate: (product: Product) => void;
	getSaladIngredients: (product: Product) => Product[];
}

export default function ProductCard({
	product,
	onStockUpdate,
	getSaladIngredients,
}: ProductCardProps) {
	const isSalad = product.ingredients.length > 0;

	return (
		<div
			className={`product-card ${
				product.in_stock ? "in-stock" : "out-of-stock"
			}`}
		>
			<div className="product-title">
				<p>{product.title}</p>
				{isSalad ? <IoExtensionPuzzle size={25} /> : null}
			</div>

			{isSalad && (
				<div className="ingredients-list">
					<SaladInfo ingredients={getSaladIngredients(product)} />
				</div>
			)}

			<button
				className="toggle-button"
				onClick={(e) => {
					e.stopPropagation();
					onStockUpdate(product);
				}}
			>
				Toggle in stock
			</button>
		</div>
	);
}
