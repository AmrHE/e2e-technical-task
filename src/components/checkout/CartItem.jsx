import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

const CartItem = ({ item }) => {
	return (
		<div
			className="grid grid-cols-5 p-4 mb-8 border-2 border-yellow-100 rounded-lg"
			key={item.id}
		>
			{/* LEFT COLUMN (image) */}
			<Image
				src={item.image}
				height={200}
				width={200}
				alt={item.name}
				style={{ objectFit: 'contain' }}
				className="size-[200px]"
			/>

			{/* MIDDLE COLUMN (DETAILS) */}
			<div className="col-span-3 mx-5">
				<p className="font-bold link">{item.name}</p>
				<div className="flex items-center">
					{Array(Math.round(item.rating.rate))
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className="h-5 text-yellow-500" />
						))}
					{'  '}
					<span> ({item.rating.count})</span>
				</div>
				<p className="my-2 text-xs line-clamp-3">{item.description}</p>
				<div className="mb-5">
					<p>${item.price}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
