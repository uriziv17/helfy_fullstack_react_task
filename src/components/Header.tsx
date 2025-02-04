import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src="src/assets/Helfy-Logo.svg"
					alt="Logo"
					style={{ height: "40px" }}
				/>
				<p>Salads Manager</p>
			</div>

			<button style={{ background: "none", border: "none", cursor: "pointer" }}>
				<img
					src="src/assets/hamburger-menu-mobile-svgrepo-com.svg"
					alt="Menu"
					style={{ height: "30px", marginRight: "10px" }}
				/>
			</button>
		</div>
	);
};

export default Header;
