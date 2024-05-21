import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ItemsList from '../src/components/products/ItemsList';
import SearchBar from '../src/components/search/SearchBar';
import { useCartContext } from '../src/context/cart';
import ShoppingCart from '../src/components/cart/ShoppingCartIcon';
import PriceRangeFilter from '../src/components/sort/PriceRangeFilter';
import fs from 'fs';
import { useFilteredItems } from '../src/context/filteredItems';
import Sorting from '../src/components/sort/Sorting';

export default function Home({ items }) {
	const [price, setPrice] = useState(750);
	const { cartItems } = useCartContext();
	const { setFilteredItems } = useFilteredItems();

	useEffect(() => {
		setFilteredItems(items.items);
	}, [items]);

	return (
		<div className="py-10 bg-gray-100">
			<Head>
				<title>E2E Technical Task</title>
				<meta
					name="description"
					content="Full stack developer E2E technical task"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="mx-0">
				<SearchBar price={price} items={items} />

				<ShoppingCart cartItems={cartItems} />

				<main className="mx-auto mt-5 max-w-screen-2xl">
					<div className="flex flex-col md:flex-row">
						<div className="w-full px-5 mb-5 md:w-3/12">
							<PriceRangeFilter price={price} setPrice={setPrice} />
							<Sorting />
						</div>
						<div className="w-full px-5 mb-5 md:w-9/12">
							<ItemsList price={price} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const filePath = 'src/data/items.json';

	const data = await fs.promises.readFile(filePath, 'utf-8');
	return { props: { items: JSON.parse(data) } };
}
