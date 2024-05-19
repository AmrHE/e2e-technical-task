'use client';

import { useEffect, useState } from 'react';
import items from '../../data/items.json';
import ItemCard from './ItemCard';
// import { useCartContext } from '../../context/cart';

const ItemsList = ({
	searchQuery,
	filteredItems,
	setFilteredItems,
	setSearchResults,
	searchResults,
}) => {
	const [allItems, setAllItems] = useState([]);
	const searchItems = () => {
		if (searchQuery) {
			setSearchResults(
				items.items.filter((item) =>
					item?.name.toLowerCase().trim().includes(searchQuery)
				)
			);
		} else if (searchQuery === '') {
			setSearchResults(items.items);
			// setFilteredItems(filteredItems);
		}
	};

	useEffect(() => {
		searchItems();
	}, [searchQuery]);

	useEffect(() => {}, [searchQuery, filteredItems, searchResults]);

	return (
		<div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
			{searchResults.filter((item) => filteredItems.includes(item)).length >
			0 ? (
				searchResults
					.filter((item) => filteredItems.includes(item))
					.map((item, i) => <ItemCard item={item} key={i} />)
			) : (
				<div className="text-xl font-medium capitalize">
					no results found...
				</div>
			)}
		</div>
	);
};

export default ItemsList;
