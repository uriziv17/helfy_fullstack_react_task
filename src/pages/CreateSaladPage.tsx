import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DB, Product } from "../data-providers/Server";
import { useNavigate } from "react-router-dom";

import "../stylesheets/create-salad.css";

interface CreateSaladPageProps {
	products: Product[];
}

interface IngredientCard {
	product: Product;
	selected: boolean;
}

interface IngredientButtonProps {
	ingredient: IngredientCard;
	toggleSelected: (ingredient: IngredientCard) => void;
}

const IngredientButton = ({
	ingredient,
	toggleSelected,
}: IngredientButtonProps) => {
	return (
		<button
			className={`ingredient-button ${ingredient.selected ? "selected" : ""}`}
			onClick={() => toggleSelected(ingredient)}
		>
			{ingredient.product.title}
		</button>
	);
};

export default function CreateSaladPage() {
	const [ingredients, setIngredients] = React.useState<IngredientCard[]>([]);
	const [title, setTitle] = React.useState<string>("");
	const navigate = useNavigate();

	const toggleSelectedIngredient = (ingredient: IngredientCard) => {
		setIngredients((prevIngredients) =>
			prevIngredients.map((ing) =>
				ing.product.id === ingredient.product.id
					? { ...ing, selected: !ing.selected }
					: ing
			)
		);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleSubmit = () => {
		const selectedIngredients = ingredients
			.filter((ingredient) => ingredient.selected)
			.map((ingredient) => ingredient.product.id);

		DB.createSalad(title, selectedIngredients).then(() => {
			navigate("/products");
		});
	};

	useEffect(() => {
		DB.getAllProducts().then((products) => {
			setIngredients(
				products
					.filter((product) => product.ingredients.length === 0)
					.map((product) => ({ product, selected: false }))
			);
		});
	}, []);

	return (
		<>
			<Header />
			<div className="salad-form-container">
				<h1>Create your own salad</h1>
				<div className="ingredients-container">
					{ingredients.map((ingredient) => (
						<IngredientButton
							key={ingredient.product.id}
							ingredient={ingredient}
							toggleSelected={toggleSelectedIngredient}
						/>
					))}
				</div>
				<input
					type="text"
					placeholder="title"
					value={title}
					onChange={handleInputChange}
				/>
				<button className="submit-button" onClick={handleSubmit}>
					Submit
				</button>
			</div>

			<Footer />
		</>
	);
}
