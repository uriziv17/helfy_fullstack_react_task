import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`sidebar ${isOpen ? "open" : ""}`}>
			<button className="close-btn" onClick={toggleSidebar}>
				&times;
			</button>
			<nav>
				<ul>
					<li>
						<Link to="/products" onClick={toggleSidebar}>
							Products
						</Link>
					</li>
					<li>
						<Link to="/create-product" onClick={toggleSidebar}>
							Create Product
						</Link>
					</li>
					<li>
						<Link to="/create-salad" onClick={toggleSidebar}>
							Create Salad
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
