import React from 'react';
import CartItem from './CartItem';

const CartItemsList = ({ cartItems }) => {
	return (
		<div className="w-4/5">
			<h1 className="pb-4 text-3xl bg-white border-b">
				{cartItems.length === 0
					? 'Your Cart is Empty...'
					: 'Your Shopping Cart'}
			</h1>

			{cartItems.map((item) => (
				<CartItem item={item} key={item.id} />
			))}
		</div>
	);
};

export default CartItemsList;
