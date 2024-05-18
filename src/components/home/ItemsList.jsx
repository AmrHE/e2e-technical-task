import { useEffect, useState } from 'react';
import items from '../../data/items.json';
import ItemCard from './ItemCard';

const ItemsList = ({ searchQuery }) => {
	const [filteredItems, setFilteredItems] = useState(items.items);

	const searchItems = () => {
		if (searchQuery) {
			console.log({ searchQuery });
			setFilteredItems(
				items.items.filter((item) =>
					item?.name.toLowerCase().trim().includes(searchQuery)
				)
			);
		} else if (searchQuery === '') {
			setFilteredItems(items.items);
		}
	};

	useEffect(() => {
		searchItems();
	}, [searchQuery]);

	return (
		// <div className="flex flex-wrap items-center justify-center xl:justify-start ">
		<div className="grid grid-flow-row-dense gap-8 mx-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10">
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
