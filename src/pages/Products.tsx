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

	const onInputChange = (searchText: string) => {};

	const onStockUpdate = (product: Product) => {
		const shouldupdateStock = (product: Product, id: number) => {
			return (
				product.id === id ||
				product.ingredients.some((i) => i.product_id === id)
			);
		};

		DB.toggleProductInStock(product.id).then(() => {
			setProducts((prevProducts) => {
				const updatedProducts = prevProducts.map((p) =>
					shouldupdateStock(p, product.id) ? { ...p, in_stock: !p.in_stock } : p
				);
				return updatedProducts;
			});
		});
	};

	return (
		<div className="products-page">
			{/* start of solution */}
			<Header />
			<div className="products-search-container">
				<SearchFilter onInputChange={() => {}} />
				<ProductsList
					products={products}
					isLoading={products.length === 0}
					onStockUpdate={onStockUpdate}
				/>
			</div>

			<Footer />
			{/* end of solution */}
		</div>
	);
};

export default Products;
