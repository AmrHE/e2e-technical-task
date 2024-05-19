'use client';

import React, { useEffect } from 'react';
import items from '../../data/items.json';
import ItemCard from './ItemCard';
import { useFilteredItems } from '../../context/filteredItems';

const ItemsList = ({ searchQuery, price }) => {
	const { setFilteredItems, filteredItems } = useFilteredItems();

	const searchItems = () => {
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

	useEffect(() => {
		searchItems();
	}, [searchQuery]);

	useEffect(() => {}, [searchQuery, filteredItems]);

	return (
		<div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
			{filteredItems.length > 0 ? (
				filteredItems.map((item, i) => <ItemCard item={item} key={i} />)
			) : (
				<div className="text-xl font-medium capitalize">
					no results found...
				</div>
			)}
		</div>
	);
};

export default ItemsList;
