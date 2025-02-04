import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<>
			<div className="header">
				<div className="logo-container">
					<img src="src/assets/Helfy-Logo.svg" alt="Logo" />
					<p>Salads Manager</p>
				</div>

				<button
					style={{ background: "none", border: "none", cursor: "pointer" }}
					onClick={toggleSidebar}
				>
					<img
						src="src/assets/hamburger-menu-mobile-svgrepo-com.svg"
						alt="Menu"
					/>
				</button>
			</div>
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
		</>
	);
};

export default Header;
