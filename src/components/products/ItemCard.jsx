import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useCartContext } from '../../context/cart';

const ItemCard = ({ item }) => {
	const { cartItems, setCartItems } = useCartContext();

	const handleAddToCart = () => {
		if (cartItems.includes(item)) {
			setCartItems(cartItems);
		} else {
			setCartItems([...cartItems, item]);
		}
	};
	return (
		<div className="relative z-40 flex flex-col p-8 m-5 bg-white rounded-xl">
			<p className="absolute text-xs italic text-gray-400 top-2 right-2">
				{item.category.charAt(0).toUpperCase() + item.category.slice(1)}
			</p>

			<div className="relative p-5 rounded-lg">
				<Image
					loading="lazy"
					src={item.image}
					alt={item.name}
					height={320}
					width={320}
					style={{ objectFit: 'contain' }}
					className="size-[320px] w-full overflow-hidden rounded-lg cursor-pointer"
				/>
			</div>

			<h4 className="my-3 mt-auto font-bold link">{item.name}</h4>

			<div className="flex items-center">
				{Array(Math.round(item.rating.rate))
					.fill()
					.map((_, i) => (
						<StarIcon key={i} className="h-5 text-yellow-500" />
					))}
				<span> ({item.rating.count})</span>
			</div>

			<p className="my-2 text-xs line-clamp-2">{item.description}</p>

			<div className="mb-5">
				<p>${item.price}</p>
			</div>

			<button onClick={handleAddToCart} className="button">
				Add to Cart
			</button>
		</div>
	);
};

export default ItemCard;
