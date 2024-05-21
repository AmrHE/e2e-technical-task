import { createContext, useContext, useState } from 'react';
// import items from '../data/items.json';
const SortedItems = createContext([]);

export const SortedItemsProvider = ({ children }) => {
	const [sortedItems, setSortedItems] = useState(null);
	const [sortingCondition, setSortingCondition] = useState(null);

	return (
		<SortedItems.Provider
			value={{
				sortedItems,
				setSortedItems,
				sortingCondition,
				setSortingCondition,
			}}
		>
			{children}
		</SortedItems.Provider>
	);
};

export const useSortedItems = () => useContext(SortedItems);
