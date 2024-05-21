'use client';

import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { useFilteredItems } from '../../context/filteredItems';
import { useSortedItems } from '../../context/sortedItems';

const ItemsList = ({ price }) => {
	const { filteredItems } = useFilteredItems();
	const { sortedItems, setSortedItems, sortingCondition } = useSortedItems();

	useEffect(() => {
		if (sortingCondition) {
			console.log(sortingCondition);
			if (sortingCondition === '0-1') {
				setSortedItems(
					filteredItems
						.filter((item) => item.price <= price)
						.sort((a, b) => a.price - b.price)
				);
			}
			if (sortingCondition === '1-0') {
				setSortedItems(
					filteredItems
						.filter((item) => item.price <= price)
						.sort((a, b) => b.price - a.price)
				);
			}
			if (sortingCondition === 'a-z') {
				setSortedItems(
					filteredItems
						.filter((item) => item.price <= price)
						.sort((a, b) => a.name.localeCompare(b.name))
				);
			}
			if (sortingCondition === 'z-a') {
				setSortedItems(
					filteredItems
						.filter((item) => item.price <= price)
						.sort((a, b) => b.name.localeCompare(a.name))
				);
			}
		} else {
			setSortedItems(filteredItems.filter((item) => item.price <= price));
		}
	}, [filteredItems, price]);

	return (
		<div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
			{sortedItems?.length > 0 ? (
				sortedItems.map((item, i) => <ItemCard item={item} key={i} />)
			) : (
				<div className="text-xl font-medium capitalize">
					no results found...
				</div>
			)}
		</div>
	);
};

export default ItemsList;
