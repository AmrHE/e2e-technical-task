import { CartContextProvider } from '../src/context/cart';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<CartContextProvider>
			<Component {...pageProps} />
		</CartContextProvider>
	);
}

export default MyApp;
