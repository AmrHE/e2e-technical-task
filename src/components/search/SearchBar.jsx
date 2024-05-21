import React from 'react';
import { useFilteredItems } from '../../context/filteredItems';

const SearchBar = ({ price, items }) => {
	const { setFilteredItems } = useFilteredItems();

	const handleSearchItems = (e) => {
		let searchQuery = e.target.value.toLowerCase().trim();
		if (searchQuery) {
			setFilteredItems(
				items.items.filter(
					(item) =>
						item?.name.toLowerCase().trim().includes(searchQuery) &&
						item.price <= price
				)
			);
		} else if (searchQuery === '') {
			setFilteredItems(items.items);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<input
				type="text"
				className="p-2 border border-r-0 border-gray-300 border-solid outline-none"
				onChange={handleSearchItems}
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
