import React from "react";
import { Ingredient, Product } from "../data-providers/Server";

interface SaladInfoProps {
	ingredients: Product[];
}

const SaladInfo: React.FC<SaladInfoProps> = ({ ingredients }) => {
	return (
		<div className="salad-info">
			<ul>
				{ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient.title}</li>
				))}
			</ul>
		</div>
	);
};

export default SaladInfo;
