interface SearchFilterProps {
	onInputChange: (searchText: string) => void;
}

const SearchFilter = ({ onInputChange }: SearchFilterProps) => {
	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Search products by title here..."
				onChange={(e) => onInputChange(e.target.value)}
			/>
			<button className="search-button">
				<img src="src/assets/searchIcon.png" alt="Search" />
			</button>
		</div>
	);
};

export default SearchFilter;
