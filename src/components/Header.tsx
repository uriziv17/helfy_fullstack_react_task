import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img src="src/assets/Helfy-Logo.svg" alt="Logo" />
				<p>Salads Manager</p>
			</div>

			<button style={{ background: "none", border: "none", cursor: "pointer" }}>
				<img
					src="src/assets/hamburger-menu-mobile-svgrepo-com.svg"
					alt="Menu"
				/>
			</button>
		</div>
	);
};

export default Header;
