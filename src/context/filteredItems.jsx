import { createContext, useContext, useState } from 'react';
import items from '../data/items.json';
const FilteredItems = createContext([]);

export const FilteredItemsProvider = ({ children }) => {
	const [filteredItems, setFilteredItems] = useState(items.items);

	return (
		<FilteredItems.Provider value={{ filteredItems, setFilteredItems }}>
			{children}
		</FilteredItems.Provider>
	);
};

export const useFilteredItems = () => useContext(FilteredItems);
