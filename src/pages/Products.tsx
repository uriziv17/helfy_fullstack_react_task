import { useEffect, useState } from "react";
import { DB, Product } from "../data-providers/Server";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import "../stylesheets/productpage.css";
import { shouldupdateStock } from "../utils";

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const onInputChange = (searchText: string) => {
		const lowerCaseSearchText = searchText.toLowerCase();
		setSearchTerm(lowerCaseSearchText);
		filterProducts(products, lowerCaseSearchText);
	};

	const filterProducts = (prods: Product[], searchTerm: string) => {
		setFilteredProducts(
			prods.filter((product) =>
				product.title.toLowerCase().includes(searchTerm)
			)
		);
	};

	const onStockUpdate = (product: Product) => {
		DB.toggleProductInStock(product.id).then(() => {
			const updatedProducts = products.map((p) =>
				shouldupdateStock(p, product.id) ? { ...p, in_stock: !p.in_stock } : p
			);
			setProducts(updatedProducts);
			filterProducts(updatedProducts, searchTerm);
		});
	};

	useEffect(() => {
		DB.getAllProducts().then((products) => {
			setProducts(products);
			filterProducts(products, searchTerm);
		});
	}, []);

	return (
		<div className="products-page">
			<Header />
			<div className="products-search-container">
				<SearchFilter onInputChange={onInputChange} />
				<ProductsList
					products={filteredProducts}
					isLoading={products.length === 0}
					onStockUpdate={onStockUpdate}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
