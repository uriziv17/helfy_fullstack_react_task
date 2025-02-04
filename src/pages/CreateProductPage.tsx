import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductForm from "../components/ProductForm";
import "../stylesheets/create-ingredient.css";
import { DB } from "../data-providers/Server";
import { useNavigate } from "react-router-dom";

export default function CreateProductPage() {
	const navigate = useNavigate();

	const createProduct = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		console.log("formData", formData);
		const title = formData.get("title");

		DB.createProduct(title as string)
			.then(() => {
				navigate("/products");
			})
			.catch((error: any) => {
				console.error("Error creating product:", error);
			});
	};

	return (
		<>
			<Header />

			<ProductForm handleSubmit={createProduct} />

			<Footer />
		</>
	);
}
