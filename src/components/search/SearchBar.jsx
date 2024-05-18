import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
	const handleChange = (e) => {
		let query = e.target.value.toLowerCase().trim();
		setSearchQuery(query);
	};
	return (
		<div className="flex items-center justify-center mb-10">
			<input
				type="text"
				className="p-2 border border-r-0 border-gray-300 border-solid outline-none"
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="p-2 text-gray-300 bg-black border border-l-0 border-gray-300 border-solid"
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
