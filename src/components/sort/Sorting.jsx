import React from 'react';
import { useSortedItems } from '../../context/sortedItems';

const Sorting = () => {
	const { setSortedItems, sortedItems, sortingCondition, setSortingCondition } =
		useSortedItems();

	const handleSelect = (e) => {
		setSortingCondition(e.target.value);
		if (e.target.value === '0-1') {
			setSortedItems(sortedItems.sort((a, b) => a.price - b.price));
		}
		if (e.target.value === '1-0') {
			setSortedItems(sortedItems.sort((a, b) => b.price - a.price));
		}
		if (e.target.value === 'a-z') {
			setSortedItems(sortedItems.sort((a, b) => a.name.localeCompare(b.name)));
		}
		if (e.target.value === 'z-a') {
			setSortedItems(sortedItems.sort((a, b) => b.name.localeCompare(a.name)));
		}
	};

	console.log({ sortingCondition });

	return (
		<div className="pr-10 lg:my-5">
			<p className="my-2 text-base font-bold text-gray-600">Sort by:</p>
			<select
				name="sort by"
				id=""
				value={sortingCondition}
				onChange={handleSelect}
				className="w-full p-3 rounded-md"
			>
				<option
					value=""
					className="my-5 capitalize"
					disabled={sortingCondition}
				>
					Sort By
				</option>
				<option key="a-z" className="capitalize" value="a-z">
					alphabetical order: A to Z
				</option>
				<option key="z-a" className="capitalize" value="z-a">
					alphabetical order: Z to A
				</option>
				<option key="0-1" className="capitalize" value="0-1">
					Price: Low to High
				</option>
				<option key="1-0" className="capitalize" value="1-0">
					Price: High to Low
				</option>
			</select>
		</div>
	);
};

export default Sorting;
