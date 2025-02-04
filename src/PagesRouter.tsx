import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Products from "./pages/Products";
import Trivia from "./pages/Trivia";

import CreateProductPage from "./pages/CreateProductPage";
import CreateSaladPage from "./pages/CreateSaladPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Welcome!, please see PagesRouter for possible routes!</div>,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/trivia",
		element: <Trivia />,
	},
	{
		path: "/create-product",
		element: <CreateProductPage />,
	},
	{
		path: "/create-salad",
		element: <CreateSaladPage />,
	},
]);

const PagesRouter = () => {
	return <RouterProvider router={router} />;
};

export default PagesRouter;
