import { products } from "../mock-data/products";
import { questions } from "../mock-data/questions";
import { shouldupdateStock } from "../utils";

let UNIQUE_ID = 2000;

const getDeepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

//feel free to add funcitons

export interface Ingredient {
	product_id: number;
	quantity: number;
}
export interface Product {
	id: number;
	title: string;
	in_stock: boolean;
	ingredients: Ingredient[];
}

export interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: string;
}

const getAllProducts = async (): Promise<Product[]> => {
	//DO NOT EDIT THIS FUNCTION
	console.log("products2", products);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(getDeepCopy(products));
		}, 1000);
	});
};

const getProductById = async (id: number): Promise<Product | undefined> => {
	// DO NOT EDIT THIS FUNCTION
	const product = products.find((product) => product.id === id);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(getDeepCopy(product));
		}, 1000);
	});
};

const createProduct = async (title: string) => {
	UNIQUE_ID += 1;
	const newProduct = {
		id: UNIQUE_ID,
		title: title,
		in_stock: true,
		ingredients: [],
	};
	products.push(newProduct);
	console.log("products", products);
};

const toggleProductInStock = async (id: number): Promise<void> => {
	const product = products.find((product) => product.id === id);
	if (product) {
		products.forEach((p) => {
			if (shouldupdateStock(p, product.id)) {
				p.in_stock = !p.in_stock;
				console.log(p);
			}
		});
	}
};

const getQuestions = async (): Promise<Question[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(questions);
		}, 1000);
	});
};

export const DB = {
	getAllProducts,
	getProductById,
	getQuestions,
	toggleProductInStock,
	createProduct,
};
