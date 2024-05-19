import { CartContextProvider } from '../src/context/cart';
import { FilteredItemsProvider } from '../src/context/filteredItems';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<FilteredItemsProvider>
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</FilteredItemsProvider>
	);
}

export default MyApp;
