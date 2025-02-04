import { useEffect, useState } from "react";
import { DB, Product } from "../data-providers/Server";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import "../stylesheets/productpage.css";

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		DB.getAllProducts().then((products) => setProducts(products));
	}, []);

	return (
		<div className="products-page">
			{/* start of solution */}
			<Header />
			<div className="products-search-container">
				<SearchFilter onInputChange={() => {}} />
				<ProductsList products={products} />
			</div>

			<Footer />
			{/* end of solution */}
		</div>
	);
};

export default Products;
