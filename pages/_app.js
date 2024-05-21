import { CartContextProvider } from '../src/context/cart';
import { FilteredItemsProvider } from '../src/context/filteredItems';
import { SortedItemsProvider } from '../src/context/sortedItems';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<SortedItemsProvider>
			<FilteredItemsProvider>
				<CartContextProvider>
					<Component {...pageProps} />
				</CartContextProvider>
			</FilteredItemsProvider>
		</SortedItemsProvider>
	);
}

export default MyApp;
