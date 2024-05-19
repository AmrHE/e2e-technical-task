import React from 'react';
import { useCartContext } from '../src/context/cart';
import CartItemsList from '../src/components/cart/CartItemsList';

const Checkout = () => {
	const { cartItems, setCartItems } = useCartContext();

	const totalPrice = cartItems?.reduce((total, item) => total + item.price, 0);

	return (
		<div className="container mx-auto bg-gray-100">
			<main className="py-10 mx-auto bg-white lg:flex max-w-screen-2xl">
				<CartItemsList cartItems={cartItems} />

				<div className="flex flex-col w-1/5 p-10 bg-white shadow-md">
					{cartItems.length > 0 && (
						<>
							<h2 className="whitespace-nowrap">
								Subtotal ({cartItems.length} items):{' '}
								<span className="font-bold">
									<p>${totalPrice}</p>
								</span>
							</h2>
							<button role="link" className="mt-2 button ">
								Proceed to checkout
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
};

export default Checkout;
