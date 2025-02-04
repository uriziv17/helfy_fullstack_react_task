import { useEffect, useState } from "react";
import { DB, Product } from "../data-providers/Server";
import { IoExtensionPuzzle } from "react-icons/io5";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		DB.getAllProducts().then((products) => setProducts(products));
	}, []);

	return (
		<div className="products-page">
			<Header />
			<SearchFilter />
			{/* start of solution */}
			{/* {products.map((product) => {
				const isSalad = product.ingredients.length > 0;
				return (
					<div key={product.id} className="product-card">
						<h1>{product.title}</h1>
						<p>{isSalad ? <IoExtensionPuzzle size={25} /> : null}</p>
					</div>
				);
			})} */}
			{/* end of solution */}
			<Footer />
		</div>
	);
};

export default Products;
