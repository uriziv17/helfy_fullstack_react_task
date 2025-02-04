import React from "react";

interface ProductFormProps {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function ProductForm({ handleSubmit }: ProductFormProps) {
	return (
		<div className="product-form-container">
			<h1>Create new Ingredient</h1>
			<form className="product-form" onSubmit={handleSubmit}>
				<input type="text" name="title" placeholder="title" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
