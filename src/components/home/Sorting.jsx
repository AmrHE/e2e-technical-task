import React, { useState } from 'react';
import items from '../../data/items.json';

const Sorting = ({ setFilteredItems, searchResults }) => {
	const [price, setPrice] = useState(750);

	// PRICE FILTER HANDLER
	const priceFilter = (e) => {
		setPrice(e.target.value < 1 ? 1 : e.target.value);

		const filtered = searchResults?.filter((item) => item.price <= price);

		console.log({ filtered });
		setFilteredItems(filtered);
	};

	return (
		<div className="flex flex-col mt-10">
			<div className="pr-10 mb-4">
				<h2 className="text-base font-bold text-gray-600">
					Price: $1 to ${price}
				</h2>
				<div className="flex flex-col my-5">
					<input
						type="range"
						min="1"
						max="750"
						value={price}
						onChange={priceFilter}
					/>
				</div>

				<div className="flex items-center justify-between text-base font-semibold text-gray-400">
					<p>$1</p>
					<p>$750</p>
				</div>
			</div>
		</div>
	);
};

export default Sorting;
