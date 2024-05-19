import React from 'react';
import { useRouter } from 'next/router';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ShoppingCart = ({ cartItems }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push('/checkout')}
			className="relative flex items-center justify-center w-40 mx-auto my-5 cursor-pointer link"
		>
			<span className="absolute top-0 font-bold text-center text-black bg-yellow-400 rounded-full size-5 right-24">
				{cartItems.length}
			</span>
			<ShoppingCartIcon className="h-12" />
			<p className="hidden mt-2 font-extrabold md:inline md:text-sm">My Cart</p>
		</div>
	);
};

export default ShoppingCart;
